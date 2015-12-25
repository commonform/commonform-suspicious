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
