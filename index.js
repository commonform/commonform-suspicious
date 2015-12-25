module.exports = suspicious

var MAX_DEPTH = 9

function suspicious(form) {
  return recurse(form, 0) }

function recurse(form, depth) {
  if (depth > MAX_DEPTH) {
    return true }
  else {
    var index, length, element
    length = form.content.length
    for (index = 0; index < length; index++) {
      element = form.content[index]
      if (typeof element === 'object' && 'form' in element) {
        if (recurse(element.form, ( depth + 1 ))) {
          return true } } }
    return false } }
