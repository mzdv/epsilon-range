/**
 * Created by Milos on 13.1.2015..
 */

var range = function(lower, upper) {
    this.lower = lower;
    this.upper = upper;
};

range.prototype.apply = function(value) {
    value % 1 === 0 ? value = parseInt(value) : value = parseFloat(value);
    return(value >= this.lower && value <= this.upper);
};

range.prototype.applyStrict = function(value) {
    value % 1 === 0 ? value = parseInt(value) : value = parseFloat(value);
    return(value > this.lower && value < this.upper);
};

module.exports = range;
