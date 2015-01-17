jadeTemplate = {};
jadeTemplate['example'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (message) {
buf.push("<p>I say: " + (jade.escape((jade_interp = message) == null ? '' : jade_interp)) + "</p>");}.call(this,"message" in locals_for_with?locals_for_with.message:typeof message!=="undefined"?message:undefined));;return buf.join("");
};

jadeTemplate['fret'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (fretNum) {
buf.push("<div" + (jade.cls(['fret',fretNum], [null,true])) + "></div>");}.call(this,"fretNum" in locals_for_with?locals_for_with.fretNum:typeof fretNum!=="undefined"?fretNum:undefined));;return buf.join("");
};

jadeTemplate['fretboard'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"fretboard\"></div>");;return buf.join("");
};

jadeTemplate['note'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (note) {
buf.push("<div" + (jade.cls(['note',note], [null,true])) + "></div>");}.call(this,"note" in locals_for_with?locals_for_with.note:typeof note!=="undefined"?note:undefined));;return buf.join("");
};
