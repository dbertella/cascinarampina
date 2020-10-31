// Cheers Queness for the tut: http://www.queness.com/post/590/jquery-thumbnail-with-zooming-image-and-fading-caption-tutorial

$(document).ready(function() {

	//move the image in pixel
	var move = 0;

	//zoom percentage, 1.2 =120%
	var zoom = 1.0;

	//On mouse over those thumbnail
	$('.post-thumb').hover(function() {

		//Set the width and height according to the zoom percentage
		width = $('.post-thumb').width() * zoom;
		height = $('.post-thumb').height() * zoom;

		//Move and zoom the image
		$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});

		//Display the caption
		$(this).find('div.caption').stop(false,true).fadeIn(150);
	},
	function() {
		//Reset the image
		$(this).find('img').stop(false,true).animate({'width':$('.post-thumb').width(), 'height':$('.post-thumb').height(), 'top':'0', 'left':'0'}, {duration:100});

		//Hide the caption
		$(this).find('div.caption').stop(false,true).fadeOut(500);
	});

});