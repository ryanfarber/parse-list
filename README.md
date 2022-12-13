# parse-list
parse a list of values into an array


## usage

```javascript
const parseList = require("@ryanforever/parse-list")

let items = "apples, oranges,bananas,    grapes,pineapples"

let array = parseList(items)
// [ 'apples', 'oranges', 'bananas', 'grapes', 'pineapples' ]
```

### customize sepearator

```javascript
let items = "black\nblue\ngreen\nwhite\npurple"

let array = parseList(items, "\n")
// [ 'black', 'blue', 'green', 'white', 'purple' ]
```