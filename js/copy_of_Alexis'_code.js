$(document).ready(function() {
	var rawnun = $('#raw_nunjucks');
	var env = new nunjucks.Environment(new nunjucks.WebLoader('/specials/2015/graphics/macros'));
	// var env = new nunjucks.Environment(new nunjucks.WebLoader('/templates'));
	rawnun.change(function() {
		console.log('Run render');
		var tmpl = new nunjucks.Template(rawnun.val(), env);
		var res = tmpl.render();
		$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
		$('.preview-show').html(res);
	});
});
