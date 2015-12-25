module.exports = suspicious

var is = require('commonform-predicate')

var MAX_DEPTH = 9
var MAX_CONTENT_LENGTH = 100
var MAX_HEADING_LENGTH = 50
var MAX_TERM_LENGTH = 50

function suspicious(form, depth) {
  var index, length, element
  if (depth === undefined) {
    depth = 0 }
  if (depth > MAX_DEPTH) {
    return true }
  else {
    length = form.content.length
    if (length > MAX_CONTENT_LENGTH) {
      return true }
    else {
      for (index = 0; index < length; index++) {
        element = form.content[index]
        if (
          ( is.child(element) &&
            ( ( ( 'heading' in element ) &&
                ( element.heading.length > MAX_HEADING_LENGTH ) ) ||
              suspicious(element.form, ( depth + 1 )) ) ) ||
          ( is.definition(element) &&
            ( element.definition.length > MAX_TERM_LENGTH ) ) ||
          ( is.use(element) &&
            ( element.use.length > MAX_TERM_LENGTH ) ) ||
          ( is.reference(element) &&
            ( element.reference.length > MAX_HEADING_LENGTH ) ) )
            { return true } }
      return false } } }
