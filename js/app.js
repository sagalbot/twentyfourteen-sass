jQuery(document).ready(function($) {
	

	//  code on sagalbot
	$('#primary-navigation a[href="http://code.sagalbot.com"]').prepend('<i class="code-sagalbot genericon genericon-code"></i>').parent('li').addClass('code-sagalbot');
	
	// code on code.sagalbot
	$('.site-title a[rel="home"]').append('<i class="code-sagalbot genericon genericon-code"></i>');

	//  Photo Icon
	$('#primary-navigation a[href="'+sagalbot.url+'/category/photography/"]').prepend('<i class="genericon genericon-image"></i>');

	//  Snow Icon
	$('#primary-navigation a[href="'+sagalbot.url+'/category/boards/"]').prepend('<i class="icon-fontello icon-snow"></i>');

	//  Sun Icon
	$('#primary-navigation a[href="'+sagalbot.url+'/category/bikes/"]').prepend('<i class="icon-fontello icon-sun"></i>');

});