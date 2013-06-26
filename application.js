$(document).ready(function(){
	$("#basecamp").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
		$(this).parent().siblings('#headline').children('.basecamp_headline').show();
	});
	$(".basecamp_headline").on('mouseenter', function(){
		$(this).siblings('.default_headline').hide();
		$(this).show();
	});
	$(".basecamp_headline").on('mouseleave', function(){
		$(this).siblings('.default_headline').show();
		$(this).hide();
	});
	$("#basecamp").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
		$(this).parent().siblings('#headline').children('.basecamp_headline').hide();
	});

	$("#highrise").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
		$(this).parent().siblings('#headline').children('.highrise_headline').show();
	});
	$("#highrise,.highrise_headline").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
		$(this).parent().siblings('#headline').children('.highrise_headline').hide();
	});

	$("#campfire").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
		$(this).parent().siblings('#headline').children('.campfire_headline').show();
	});
	$("#campfire,.campfire_headline").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
		$(this).parent().siblings('#headline').children('.campfire_headline').hide();
	});
});