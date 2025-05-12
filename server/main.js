import app from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
// import * as helpers from './helpers/index.js'
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewsFolder = path.join(__dirname, "./views")

const server = app()
const port = 3000

// handlebars configuration
server.set('view engine', 'hbs');
server.set('views', viewsFolder);

server.engine('hbs', engine({
  layoutsDir: viewsFolder + '/layouts',
  partialsDir: viewsFolder + '/partials/',
  extname: 'hbs',
  defaultLayout: false,
  helpers: {
    // Helper para comparação
    eq: (v1, v2) => v1 === v2,
    neq: (v1, v2) => v1 !== v2,
    lt: (v1, v2) => v1 < v2,
    gt: (v1, v2) => v1 > v2,
    lte: (v1, v2) => v1 <= v2,
    gte: (v1, v2) => v1 >= v2,
    and() {
      return Array.prototype.every.call(arguments, Boolean);
    },
    or() {
      return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    }
  }
}));

server.use(cors())
server.use(app.static('public'))
server.use(app.static('modules'))
server.use(app.static('projects'))
server.use(app.static('assets'))

async function carregarProjetos() {
  try {
    const dados = fs.readFileSync('public/data/projects.json','utf-8');
    return JSON.parse(dados);
  } catch (err) {
    console.error('Erro ao carregar projetos:', err);
    return [];
  }
}

server.get('/', async (req, res) => {
  let lista = await carregarProjetos()
  res.render('main', { layout: 'index', projetos: lista });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})