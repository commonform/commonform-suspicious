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
