// test.js

const parseList = require("./src")

let fruits = "apples, oranges,bananas,    grapes,pineapples"
let colors = "black\nblue\ngreen\nwhite\npurple"

fruits = parseList(fruits)
colors = parseList(colors, "\n")
console.log(fruits)
console.log(colors)