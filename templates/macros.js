(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/macros.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!-- links -->\n";
var macro_t_1 = runtime.makeMacro(
["url", "text"], 
["target"], 
function (l_url, l_text, kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("url", l_url);
frame.set("text", l_text);
frame.set("target", kwargs.hasOwnProperty("target") ? kwargs["target"] : "_blank");
var t_2 = "";t_2 += "<a href=\"";
t_2 += runtime.suppressValue(l_url, env.opts.autoescape);
t_2 += "\" target=\"";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "target"), env.opts.autoescape);
t_2 += "\">";
if(l_text) {
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
;
}
else {
t_2 += runtime.suppressValue(l_url, env.opts.autoescape);
;
}
t_2 += "</a>";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("link");
context.setVariable("link", macro_t_1);
output += "\n\n<!-- inline photos -->\n";
var macro_t_3 = runtime.makeMacro(
["src", "url", "caption", "credit", "fullwidth"], 
["description", "col"], 
function (l_src, l_url, l_caption, l_credit, l_fullwidth, kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("src", l_src);
frame.set("url", l_url);
frame.set("caption", l_caption);
frame.set("credit", l_credit);
frame.set("fullwidth", l_fullwidth);
frame.set("description", kwargs.hasOwnProperty("description") ? kwargs["description"] : "");
frame.set("col", kwargs.hasOwnProperty("col") ? kwargs["col"] : "12");
var t_4 = "";t_4 += "\n<div class=\"image_macro col_";
t_4 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "col"), env.opts.autoescape);
t_4 += "\">\n\t";
if(l_url) {
t_4 += "<a href=\"";
t_4 += runtime.suppressValue(l_url, env.opts.autoescape);
t_4 += "\" target=\"_blank\">";
;
}
t_4 += "<img class=\"inline_img";
if(l_fullwidth) {
t_4 += " no_fw";
;
}
t_4 += "\" src=\"";
t_4 += runtime.suppressValue(l_src, env.opts.autoescape);
t_4 += "\" alt=\"";
t_4 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "description"), env.opts.autoescape);
t_4 += "\" draggable=\"false\">";
if(l_url) {
t_4 += "</a>";
;
}
t_4 += "\n\t";
if(l_credit) {
t_4 += "\n\t<p class=\"inline_credit\">";
t_4 += runtime.suppressValue(l_credit, env.opts.autoescape);
t_4 += "</p>\n\t";
;
}
t_4 += "\n\t";
if(l_caption) {
t_4 += "\n\t<p class=\"inline_caption\">";
t_4 += runtime.suppressValue(l_caption, env.opts.autoescape);
t_4 += "</p>\n\t";
;
}
t_4 += "\n</div>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_4);
});
context.addExport("img");
context.setVariable("img", macro_t_3);
output += "\n\n<!-- embed a tweet -->\n";
var macro_t_5 = runtime.makeMacro(
["url"], 
[], 
function (l_url, kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("url", l_url);
var t_6 = "";t_6 += "\n<blockquote class=\"twitter-tweet\" lang=\"en\"><p lang=\"en\" dir=\"ltr\"></p><a href=\"";
t_6 += runtime.suppressValue(l_url, env.opts.autoescape);
t_6 += "\"></a></blockquote>\n<script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_6);
});
context.addExport("tweet");
context.setVariable("tweet", macro_t_5);
output += "\n\n<!-- hard break -->\n";
var macro_t_7 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
var t_8 = "";t_8 += "\n<div class=\"clear_break\"></div>\n";
;
frame = frame.pop();
return new runtime.SafeString(t_8);
});
context.addExport("break");
context.setVariable("break", macro_t_7);
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

