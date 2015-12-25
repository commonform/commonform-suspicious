module.exports = suspicious

var predicate = require('commonform-predicate')

var MAX_DEPTH = 9
var MAX_TERM_LENGTH = 50
var MAX_HEADING_LENGTH = 50

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
      if (predicate.child(element)) {
        var longHeading = (
          'heading' in element &&
          element.heading.length > MAX_HEADING_LENGTH )
        if (longHeading) {
          return true }
        else if (recurse(element.form, ( depth + 1 ))) {
          return true } }
      else if (predicate.definition(element)) {
        if (element.definition.length > MAX_TERM_LENGTH) {
          return true } }
      else if (predicate.use(element)) {
        if (element.use.length > MAX_TERM_LENGTH) {
          return true } }
      else if (predicate.reference(element)) {
        if (element.reference.length > MAX_HEADING_LENGTH) {
          return true } } }
    return false } }
