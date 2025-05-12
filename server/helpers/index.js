export function list (items, options) {
  console.log('items', items)
  console.log('options', options)
  const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
  return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
}

export function ifElseBlock (conditional, options) {
  console.log('conditional', conditional)
  console.log('options', options)
  if (conditional) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}