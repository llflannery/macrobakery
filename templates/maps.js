(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/maps.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!-- maps -->\n<!-- add css -->\n";
var macro_t_1 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
var t_2 = "";t_2 += "\n<link rel=\"stylesheet\" type=\"text/css\" href=\"http://www.tampabay.com/iwov-resources/specials/macros/maps.css\">\n";
;
frame = frame.pop();
return new runtime.SafeString(t_2);
});
context.addExport("maps");
context.setVariable("maps", macro_t_1);
output += "\n<!-- locator map on image -->\n";
var macro_t_3 = runtime.makeMacro(
["src", "url", "caption", "credit", "fullwidth", "place"], 
["description", "position"], 
function (l_src, l_url, l_caption, l_credit, l_fullwidth, l_place, kwargs) {
frame = frame.push();
kwargs = kwargs || {};
if (kwargs.hasOwnProperty("caller")) {
frame.set("caller", kwargs.caller); }
frame.set("src", l_src);
frame.set("url", l_url);
frame.set("caption", l_caption);
frame.set("credit", l_credit);
frame.set("fullwidth", l_fullwidth);
frame.set("place", l_place);
frame.set("description", kwargs.hasOwnProperty("description") ? kwargs["description"] : "");
frame.set("position", kwargs.hasOwnProperty("position") ? kwargs["position"] : "bottom");
var t_4 = "";t_4 += "\n<div class=\"col_12\">\n\t<div class=\"map_container\">\n\t\t";
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
t_4 += "\n\t\t";
if(l_place) {
t_4 += "\n\t\t<iframe class=\"map_thumb\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBpXSzXNOtY6RF4j1iOiZIbJEUxzzfSCAU&q=";
t_4 += runtime.suppressValue(l_place, env.opts.autoescape);
t_4 += "&maptype=satellite\"></iframe>\n\t\t";
;
}
t_4 += "\n\t</div>\n\t";
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
context.addExport("img_map");
context.setVariable("img_map", macro_t_3);
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

