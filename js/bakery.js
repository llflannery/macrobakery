$(document).ready(function() {

	// var env = new nunjucks.Environment(new nunjucks.WebLoader('/specials/2015/graphics/macros'));
	var env = new nunjucks.Environment(new nunjucks.WebLoader('../templates'));

	//macro list
	var linkMacro =     "{% import 'link.html' as link %}";
	var embedMacro =    "{% import 'embed.html' as embed %}{{ embed.stylesheet() }}";
	var listicleMacro = "{% import 'listicle.html' as listicle %}{{ listicle.stylesheet() }}";
	var timelineMacro = "{% import 'timeline.html' as timeline %}{{ timeline.stylesheet() }}";

	var stylesheet = '<link rel="stylesheet" type="text/css" href="http://www.tampabay.com/specials/2015/graphics/macros/css/listicle.css">';

 $('.inputs').hide();
 $('.headButtons').hide();

var today = new Date();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(mm<10) {
    mm='0'+mm }
today = yyyy+'/'+mm+'/';

 $('.head').click(function() {    //I work if the div is right below the button
	 $(this).toggleClass("buttonBorder");
   $(this).next().next('.headButtons').toggle();
 });

 	$('.link').click(function() {   // I work if the button and div have matching class
		 $('.link').removeClass("buttonBorder");
		 $('#hardBreak').removeClass("buttonBorder");
		 $('#ruler').removeClass("buttonBorder");
		 $(this).addClass("buttonBorder");
		 $('.inputs').hide();
		 var className = $(this).attr('class').split(" ");
		 var secondClassName = className[1];
     $('div.'+ secondClassName).toggle();
	});

	document.getElementById('doneLink').onclick = function() {

  	var textValue = document.getElementById('linkText').value;
		var introValue = document.getElementById('linkIntro').value;
		textValue = textValue.replace(/'/g, "\\'"); // makes sure (') doesn't break code

if ( introValue == "") {
	var fullValue = '<i>' + textValue + '</i>';
}
else {
		introValue = introValue.replace(/'/g, "\\'").toUpperCase(); // makes sure (') doesn't break code
		introValue = '<b>' + introValue + ': '+ '</b>';
		var fullValue = '<i>' + introValue + textValue + '</i>';
}

		var urlValue = document.getElementById('urlText').value;

		var allrawnun = linkMacro + '{{ link.link(url=' + "'" + urlValue + "'" + ', text=' + "'" + fullValue + "'" +') }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneFWphoto').onclick = function() {
		var	photoUrl = document.getElementById("photoUrl").value;
if ( photoUrl == "")
		{ var slug = document.getElementById('photoUrl2').value;
			var url = 'http://www.tampabay.com/resources/images/blogs-photo/rendered/' + today + slug +'_8col.jpg'; } // did they enter whole url or just slug?
else { var url = document.getElementById('photoUrl').value; }

		var caption = document.getElementById('photoCaption').value;
		caption = caption.replace(/'/g, "\\'");

		var credit = document.getElementById('photoCredit').value;
		credit = credit.replace(/'/g, "\\'");
		var linked = document.getElementById('photoLinked').value;

		var allrawnun = stylesheet + embedMacro + '{{ embed.full_width_img(src=' + "'" + url + "'" +  ', url=' + "'" + linked + "'" + ', caption=' + "'" + caption + "'" +', credit=' + "'" + credit + "'" + ') }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneHWphoto').onclick = function() {


		var	hwphotoUrl = document.getElementById("hwphotoUrl").value;
if ( hwphotoUrl == "")
		{ var slug = document.getElementById('hwphotoUrl2').value;
			var hwurl = 'http://www.tampabay.com/resources/images/blogs-photo/rendered/' + today + slug +'_8col.jpg'; } // did they enter whole url or just slug?
else { var hwurl = document.getElementById('hwphotoUrl').value; }

		var hwcaption = document.getElementById('hwphotoCaption').value;
		hwcaption = hwcaption.replace(/'/g, "\\'");
		var hwcredit = document.getElementById('hwphotoCredit').value;
		hwcredit = hwcredit.replace(/'/g, "\\'");
		var hwlinked = document.getElementById('hwphotoLinked').value;

		var allrawnun = stylesheet + embedMacro + '{{ embed.half_width_img(src=' + "'" + hwurl + "'" + ', url=' + "'" + hwlinked + "'" + ', caption=' + "'" + hwcaption + "'" +', credit=' + "'" + hwcredit + "'" + ') }}';

			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneGoogleform').onclick = function() {

  	var url = document.getElementById('gfUrl').value;

		var allrawnun = embedMacro + '{{ embed.g_form("' + url +'") }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneSBSphoto').onclick = function() {

// LEFT
	var	sbsLefturl = document.getElementById("sbsLeftphotoUrl").value;
		if ( sbsLefturl == "")
			{ var slug = document.getElementById('sbsLeftphotoUrl2').value;
				var sbsLefturl = 'http://www.tampabay.com/resources/images/blogs-photo/rendered/' + today + slug +'_8col.jpg'; } // did they enter whole url or just slug?
		else { var sbsLefturl = document.getElementById('sbsLeftphotoUrl').value; }

		var sbsLeftcaption = document.getElementById('sbsLeftphotoCaption').value;
		sbsLeftcaption = sbsLeftcaption.replace(/'/g, "\\'");
		var sbsLeftcredit = document.getElementById('sbsLeftphotoCredit').value;
		sbsLeftcredit = sbsLeftcredit.replace(/'/g, "\\'");
		var sbsLeftlinked = document.getElementById('sbsLeftphotoLinked').value;

//RIGHT
		var	sbsRighturl = document.getElementById("sbsRightphotoUrl").value;
			if ( sbsRighturl == "")
				{ var slug = document.getElementById('sbsRightphotoUrl2').value;
					var sbsRighturl = 'http://www.tampabay.com/resources/images/blogs-photo/rendered/' + today + slug +'_8col.jpg'; } // did they enter whole url or just slug?
			else { var sbsRighturl = document.getElementById('sbsLeftphotoUrl').value; }

		var sbsRightcaption = document.getElementById('sbsRightphotoCaption').value;
		sbsRightcaption = sbsRightcaption.replace(/'/g, "\\'");
		var sbsRightcredit = document.getElementById('sbsRightphotoCredit').value;
		sbsRightcredit = sbsRightcredit.replace(/'/g, "\\'");
		var sbsRightlinked = document.getElementById('sbsRightphotoLinked').value;

	 	var allrawnun = stylesheet + embedMacro + '{{ embed.double_img(left_src=' + "'" + sbsLefturl + "'" + ', left_url=' + "'" + sbsLeftlinked + "'" + ', left_caption=' + "'" + sbsLeftcaption + "'" + ', left_credit=' + "'" + sbsLeftcredit + "'" + ', right_src=' + "'" + sbsRighturl + "'" + ', right_url=' + "'" + sbsRightlinked + "'" + ', right_caption=' + "'" + sbsRightcaption + "'" + ', right_credit=' + "'" + sbsRightcredit + "'" +') }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};


	document.getElementById('doneTwitter').onclick = function() {

		var turl = document.getElementById('twitterUrl').value;

		var allrawnun = embedMacro + '{{ embed.tweet(url=' + "'" + turl + "'" +') }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};


	document.getElementById('donePush').onclick = function() {

		var textValue = document.getElementById('linkPush').value;
		// textValue = textValue.replace(/'/g, "\\'"); // makes sure (') doesn't break code
		var urlValue = document.getElementById('urlPush').value;

		var storyURL = urlValue.substring(0, urlValue.lastIndexOf("/") );
		var storyID = urlValue.substring(urlValue.lastIndexOf("/") + 1, urlValue.length);

		console.log(storyID.length);

		var fullLink = storyID + '@' + storyURL;

		var all = '{"aps":{"alert":"' + textValue + '"},"eid":"' + fullLink + '"}'

		// var allrawnun = linkMacro + '{{ link.link(url=' + "'" + urlValue + "'" + ', text=' + "'" + textValue + "'" +') }}';
		// 	var tmpl = new nunjucks.Template(allrawnun, env);
		// 	var res = tmpl.render();
		// 	$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));

		if ( storyID.length > 6 && storyID.length < 9 ){
    	$('textarea').html(all);
		}
		else {
			$('textarea').append("Wait! You can only use this for stories in teamsite (aka, stories that follow the format http://tampabay.com/my-story-url/123456) If it is in that format and you're still getting this error, delete the trailing slash /");
		 }

		};

	document.getElementById('hardBreak').onclick = function() {

		$('.link').removeClass("buttonBorder");
		$(this).addClass("buttonBorder");

		var allrawnun = embedMacro + '{{ embed.break() }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('ruler').onclick = function() {

		$('.link').removeClass("buttonBorder");
		$(this).addClass("buttonBorder");

		var allrawnun = listicleMacro + '{{ listicle.ruler() }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneHeader').onclick = function() {

		var headText = document.getElementById('headerText').value;
		headText = headText.replace(/'/g, "\\'");

		var allrawnun = listicleMacro + '{{ listicle.header(' + "'" + headText + "'" + ') }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneSubhead').onclick = function() {

		var shText = document.getElementById('subheadText').value;
		shText = shText.replace(/'/g, "\\'");

		var allrawnun = listicleMacro + '{{ listicle.subhed(' + "'" + shText + "'" + ') }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneSpacer').onclick = function() {

		var spacerunit = document.getElementById('spacerText').value;

		var allrawnun = timelineMacro + '{{ timeline.spacer(' + spacerunit + ') }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneUnit').onclick = function() {

		var text = document.getElementById('unitText').value;
		text = text.replace(/'/g, "\\'");

		var allrawnun = timelineMacro + '{{ timeline.unit(' + "'" + text + "'" + ') }}';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	document.getElementById('doneEntry').onclick = function() {

		var headline = document.getElementById('entryHeadline').value;
		headline = headline.replace(/'/g, "\\'");

		var	photo = document.getElementById("entryPhoto").value;
if ( photo == "")
		{ var slug = document.getElementById('entryPhoto2').value;
			var photo = 'http://www.tampabay.com/resources/images/blogs-photo/rendered/' + today + slug +'_8col.jpg'; } // did they enter whole url or just slug?
else { var photo = document.getElementById('entryPhoto').value; }

		var blurb = document.getElementById('entryBlurb').value;
		//blurb = blurb.replace(/'/g, "\\'");
		var story = document.getElementById('entryStory').value;
		story = story.replace(/'/g, "\\'");

		var allrawnun = timelineMacro + "{% import 'embed.html' as embed %}{% import 'listicle.html' as listicle %}{% import 'link.html' as link %}{{ embed.img(" +
		"'" + photo + "'" + ', col="4") }}<div class="col_4 last">{{ listicle.header(' + "'" + headline + "'" + ') }}<p>' + blurb +
		'</p><p>{{ link.link(' + "'" + story + "'" + ', "Read the full story...") }}</p></div>';
			var tmpl = new nunjucks.Template(allrawnun, env);
			var res = tmpl.render();
			$('#macro-result').text(res.replace(/(\r\n|\n|\r)/gm, ''));
			$('.preview-show').html(res);
	};

	//


});
