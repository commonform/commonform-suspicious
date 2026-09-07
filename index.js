import * as predicate from 'commonform-predicate'

const MAX_DEPTH = 9
const MAX_CONTENT_LENGTH = 100
const MAX_HEADING_LENGTH = 50
const MAX_TERM_LENGTH = 50
const MAX_WORD_LENGTH = 50

export default function suspicious (form, depth) {
  let index, length, element
  if (depth === undefined) {
    depth = 0
  }
  if (depth > MAX_DEPTH) {
    return true
  } else {
    length = form.content.length
    if (length > MAX_CONTENT_LENGTH) {
      return true
    } else {
      for (index = 0; index < length; index++) {
        element = form.content[index]
        if (predicate.child(element)) {
          if (
            ('heading' in element) &&
            (element.heading.length > MAX_HEADING_LENGTH)
          ) return true
          if (suspicious(element.form, (depth + 1))) return true
        }
        if (
          predicate.definition(element) &&
          element.definition.length > MAX_TERM_LENGTH
        ) return true
        if (
          predicate.use(element) &&
          element.use.length > MAX_TERM_LENGTH
        ) return true
        if (
          predicate.reference(element) &&
          element.reference.length > MAX_HEADING_LENGTH
        ) return true
        if (predicate.text(element) && (element.split(/\b/).some(tooLong))) return true
      }
      return false
    }
  }
}

function tooLong (word) {
  return word.length > MAX_WORD_LENGTH
}
