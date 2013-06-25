$(document).ready(function(){
	$("#basecamp").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
	});
	$("#basecamp").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
	});
	$("#highrise").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
	});
	$("#highrise").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
	});
	$("#campfire").on('mouseenter', function(){
		$(this).parent().siblings('#headline').children('.default_headline').hide();
	});
	$("#campfire").on('mouseleave', function(){
		$(this).parent().siblings('#headline').children('.default_headline').show();
	});
});