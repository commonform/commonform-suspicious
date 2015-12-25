```javascript
var suspicious = require('commonform-suspicious')
```

The examples in this README are the package's test suite.

```javascript
var assert = require('assert')
```

# Deep Nesting

```javascript
var deeplyNested = { content: [ 'A' ] }

for (var depth = 0; depth < 11; depth++) {
  deeplyNested = { content: [ { form: deeplyNested } ] } }

assert(suspicious(deeplyNested))
```

# Long Defined Terms

```javascript
var term = ( 'This defined term keeps going' + ' and going'.repeat(10) )

assert(suspicious({ content: [ { definition: term } ] }))

assert(suspicious({ content: [ { use: term } ] }))
```

# Long Headings

```javascript
var heading = ( 'This heading keeps going' + ' and going'.repeat(10) )

assert(suspicious({ content: [ { reference: heading } ] }))

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
var word = ( 'gobbledy' + 'obbledy'.repeat(10) + 'gook' )

assert(suspicious({ content: [ word ] }))
assert(!suspicious({ content: [ 'gobbledygook' ] }))
assert(!suspicious({ content: [ 'gobbledy gook' ] }))
```
