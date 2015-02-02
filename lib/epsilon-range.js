/**
 * Created by Milos on 13.1.2015..
 */

var range = function(lower, upper) {
    this.lower = lower;
    this.upper = upper;
};

range.prototype.apply = function(value) {
    parsed = parseInt(value);
    return(parsed >= this.lower && parsed <= this.upper);
};

range.prototype.applyStrict = function(value) {
    parsed = parseInt(value);
    return (parsed > this.lower && parsed < this.upper);
};

module.exports = range;
