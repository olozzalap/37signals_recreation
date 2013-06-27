$(document).ready(function(){
	$("#basecamp").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
		$(this).parent().siblings('#headline').children('.basecamp_headline').show();
	});
	$(".basecamp_headline").on('mouseover', function(){
		$(document).find('.default_headline').hide();
		$(document).find('.basecamp_headline').show();
	});
	$(".basecamp_headline").on('mouseleave', function(){
		$(document).find('.default_headline').show();
		$(document).find('.basecamp_headline').hide();
	});
	$("#basecamp").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
		$(this).parent().siblings('#headline').children('.basecamp_headline').hide();
	});


	$("#highrise").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
		$(this).parent().siblings('#headline').children('.highrise_headline').show();
	});
	$(".highrise_headline").on('mouseover', function(){
		$(document).find('.default_headline').hide();
		$(document).find('.highrise_headline').show();
	});
	$(".highrise_headline").on('mouseleave', function(){
		$(document).find('.default_headline').show();
		$(document).find('.highrise_headline').hide();
	});
	$("#highrise").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
		$(this).parent().siblings('#headline').children('.highrise_headline').hide();
	});

	$("#campfire").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
		$(this).parent().siblings('#headline').children('.campfire_headline').show();
	});
	$(".campfire_headline").on('mouseover', function(){
		$(document).find('.default_headline').hide();
		$(document).find('.campfire_headline').show();
	});
	$(".campfire_headline").on('mouseleave', function(){
		$(document).find('.default_headline').show();
		$(document).find('.campfire_headline').hide();
	});
	$("#campfire").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
		$(this).parent().siblings('#headline').children('.campfire_headline').hide();
	});
});