<?php 

//  Enqueue Scripts
function sagalbot_scripts() {

	wp_enqueue_script( 'sagalbot-script', get_stylesheet_directory_uri() . '/js/app.min.js', array('jquery'), false, true );
	wp_localize_script( 'sagalbot-script', 'sagalbot', array(
			'url'	=>	get_home_url()
		) );

}
add_action('wp_enqueue_scripts', 'sagalbot_scripts');


//  Reset Content Width
$content_width = 660;