epsilon-range
=============
Utility for determining if a number, integer or float, belongs to a range.

`npm install epsilon-range`

`app.js` contains tests for the library (just `console.log`'s, I didn't want to deploy a testing framework)

Usage
-----
`var range = require("epsilon-range");`

`var epsilon = new range(3,5); //first parameter is the lower value, and the second one is the upper value`

API
---
epsilon.apply(x)
----------------
Does a weak comparison to check if the value x is in the range (using >= and <=)

epsilon.applyStrict(x)
----------------------
Does a strict comparison to check if the value x is in the range (using > and <)

License
-------
MIT
