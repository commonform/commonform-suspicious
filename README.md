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
                        { form: { content: [ 'A' ] } } ] } } ] } } ] } } ] } } ] } } ] } } ] } } ] } } ] } } ] }))
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
