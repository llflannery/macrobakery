(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/timeline.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!-- timelines -->\n<!-- ad css -->\n";
var macro_t_1 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
var t_2 = "";t_2 += "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"/specials/2015/graphics/alex_test/css/timeline.css\">\n<script type=\"text/javascript\" src=\"/specials/2015/graphics/alex_test/templates/timeline.js\"></script>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("timeline");
context.setVariable("timeline", macro_t_1);
output += "\n<!-- if you're making a timeline, use this to show time progression\n\tThe number is how many units. You can decide the magnitude of your\n\tunits. Whether that's days or months or years. Each unit is 10px high -->\n";
var macro_t_3 = runtime.makeMacro(
["unit"], 
[], 
function (l_unit, kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("unit", l_unit);
var t_4 = "";t_4 += "\n<div class=\"col_12\" style=\"margin:20px 0;\">\n\t";
frame = frame.push();
var t_7 = (lineno = 11, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "range"), "range", [0,l_unit]));
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("i", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
t_4 += "\n\t<div class=\"timeline_spacer\"></div>\n\t";
;
}
}
frame = frame.pop();
t_4 += "\n</div>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_4);
});
context.addExport("spacer");
context.setVariable("spacer", macro_t_3);
output += "\n<!-- timeline unit header -->\n";
var macro_t_9 = runtime.makeMacro(
["text"], 
[], 
function (l_text, kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
var t_10 = "";t_10 += "\n<div class=\"col_12 timeline_unit\">\n\t<p>";
t_10 += runtime.suppressValue(l_text, env.opts.autoescape);
t_10 += "</p>\n</div>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_10);
});
context.addExport("unit");
context.setVariable("unit", macro_t_9);
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

