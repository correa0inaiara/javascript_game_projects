import app from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewsFolder = path.join(__dirname, "./views")

const server = app()
const port = 3000

let projects = []

// handlebars configuration
server.set('view engine', 'hbs');
server.set('views', viewsFolder);

server.engine('hbs', engine({
  layoutsDir: viewsFolder + '/layouts',
  partialsDir: viewsFolder + '/partials/',
  extname: 'hbs',
  defaultLayout: false,
}));

server.use(app.static('public'))
server.use(app.static('modules'))
server.use(app.static('projects'))
server.use(app.static('assets'))

fs.readFile('public/data/projects.json', function(err, data) { 

  if (err) throw err; 

  projects = JSON.parse(data); 
  // console.log(projects); 
}); 

server.get('/', (req, res) => {
  res.render('main', { layout: 'index', projects });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})