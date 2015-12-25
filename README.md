```javascript
var suspicious = require('commonform-suspicious')
```

# Deep Nesting

```javascript
var assert = require('assert')

assert(
  suspicious({
    content: [
      { form: { content: [
        { form: { content: [
          { form: { content: [
            { form: { content: [
              { form: { content: [
                { form: { content: [
                  { form: { content: [
                    { form: { content: [
                      { form: { content: [
                        { form: { content: [ 'A' ] } } ] } }
                                                 ] } } ] } }
                                                 ] } } ] } }
                                                 ] } } ] } }
                                                 ] } } ] } } ] }))
```

# Long Defined Terms

```javascript
var term = (
  'This is a really long defined term' +
  ' that just keeps going' +
  ' and going' +
  ' and going' )

assert(suspicious({ content: [ { definition: term } ] }))

assert(suspicious({ content: [ { use: term } ] }))
```

# Long Headings

```javascript
var heading = (
  'This is a really long heading ' +
  ' that just keeps going' +
  ' and going' +
  ' and going' )

assert(
  suspicious({ content: [ { reference: heading } ] }))

assert(
  suspicious({
    content: [
      { heading: heading,
        form: { content: [ 'A' ] } } ] }))
```

# Long Content Arrays

```javascript
var longContentArray = [ ]
for (var index = 0; index < 300; index++) {
  if (index % 2) {
    longContentArray.push('X') }
  else {
    longContentArray.push({ use: 'Y' }) } }

assert(suspicious({ content: longContentArray }))
```

# Long Words

```javascript
assert(!suspicious({ content: [ 'gobbledygook' ] }))
assert(!suspicious({ content: [ 'gobbledy gook' ] }))
var word = ( 'gobbledy' + 'obbledy'.repeat(10) + 'gook' )
assert(suspicious({ content: [ word ] }))
```
