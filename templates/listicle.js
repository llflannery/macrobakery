(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/listicle.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!-- listicle -->\n<!-- add css -->\n";
var macro_t_1 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
var t_2 = "";t_2 += "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"css/listicle.css\">\n<script type=\"text/javascript\" src=\"templates/listicle.js\"></script>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("listicle");
context.setVariable("listicle", macro_t_1);
output += "\n<!-- listicle header -->\n";
var macro_t_3 = runtime.makeMacro(
["text"], 
[], 
function (l_text, kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
var t_4 = "";t_4 += "\n<h3 class=\"listicle_header\">";
t_4 += runtime.suppressValue(l_text, env.opts.autoescape);
t_4 += "</h3>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_4);
});
context.addExport("header");
context.setVariable("header", macro_t_3);
output += "\n<!-- a ruler, if you want it -->\n";
var macro_t_5 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
var t_6 = "";t_6 += "\n<div class=\"listicle_ruler\"></div>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_6);
});
context.addExport("ruler");
context.setVariable("ruler", macro_t_5);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

