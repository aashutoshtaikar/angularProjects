var matchAllRegEx = /./gm;

var literalSearchRegEx = /coreyms\.com/gm;

var wordBoundaryRegEx = /\bHa/gm;
var notAwordBoundaryRegEx = /\BHa/gm;

var startOfStringRegEx = /^Ha/gm;

var wordChar = /\w/gm;

var endOfStringRegEx = /Ha$/gm;

//match any 3 digits
var digitsRegEx = /\d\d\d/gm;

//match a whole phone number
var digits2RegEx = /\d\d\d.\d\d\d.\d\d\d\d/gm; 

//match a whole ph number with - or . seperator using character set[-.]
var digits2RegEx = /\d\d\d[-.]\d\d\d[-.]\d\d\d\d/gm; 


var digits3RegEx = /[89]00[-.]\d\d\d[-.]\d\d\d\d/gm; 

// match using quantifiers
var digits4RegEx = /\d{3}[-.]\d{3}[-.]\d{4}/gm;


var digitsCharsetRegEx = /[1-7]/gm;

var charsetRangeRegEx = /[a-zA-Z]/gm;

var negatecharsetRangeRegEx = /[a-zA-Z]/gm;

//quantifiers and groups and either-or
var nameRegEx = /Mr\.?\s[A-Z]\w*/gm;

var name2RegEx = /M(r|s|rs)\.?\s[A-Z]\w*/gm;

// emails.txt ===========
var emailRegEx = /[a-zA-Z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)/gm;

var email2RegEx = /[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/gm;


var email3RegEx = /[\w_.-]+@[\w-]+\.[\w-.]+/gm;


//urls.txt ==============
var urlRegEx = /https?:\/{2}(www.)?\w+\.\w+/gm;
var urlGroupedRegEx = /https?:\/{2}(www\.)?(\w+)(\.\w+)/gm;

