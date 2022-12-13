// src.js

function parseList(string, separator) {
	if (!string) throw new Error("no string to parse")
	let arr = []
	separator = separator || ","
	arr = string.split(separator).map(x => x.trim()).filter(x => x)
	return arr
}


module.exports = parseList


