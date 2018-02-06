<?php

/**
 * Theme assets
 */
add_action('wp_enqueue_scripts', function () {
	$theme_version = et_get_theme_version();
	wp_enqueue_style('divi/style', get_template_directory_uri() . '/style.css', false, $theme_version);
	wp_enqueue_style('padgett/style', get_stylesheet_directory_uri() . '/style.css', false, null);
	wp_enqueue_script('padgett/scripts', get_stylesheet_directory_uri() . '/scripts.js', false, null, true);
}, 100);


/**
 * Contact Form 7 Zapier Webhook
 *
 * Uses WP's HTTP POST method to hit up a Zapier Webhook when a contact form is submitted.
 *
 * @see http://hookr.io/actions/wpcf7_mail_sent/
 * @see https://codex.wordpress.org/Function_Reference/wp_remote_post
 *
 * @param object $contact_form The data sent by the form
 * @param string $url The Zapier static webhook URL
 * @return array|WP_Error Array of results including HTTP headers or WP_Error if the request failed.
 */

add_action( 'wpcf7_mail_sent', function( $contact_form ) {

	// Make sure the form was submitted and that there is data
  $submission = WPCF7_Submission::get_instance();

	// If there is no data, don't continue
  if ( !$submission ) {
		return false;
	}

	// Let's get the data!
	$posted_data = $submission->get_posted_data();

	// Handle the 'Free Estimate' form
	if ( '2119' == $contact_form->id ) {
		// The Zapier static webhook URL
		$url = 'https://hooks.zapier.com/hooks/catch/1895702/591qa4/';

		$result = wp_remote_post($url, array(
			'method' => 'POST',
			'timeout' => 45,
			'redirection' => 5,
			'httpversion' => '1.0',
			'blocking' => true,
			'headers' => array(),
			'body' => array(
				'first-name' => $posted_data['first-name'],
				'last-name' => $posted_data['last-name'],
				'business-name' => $posted_data['business-name'],
				'email' => $posted_data['your-email'],
				'phone' => $posted_data['your-phone'],
				'description' => $posted_data['description'],
				'services' => $posted_data['services'],
				'org-type' => $posted_data['org-type'],
				'revenue' => $posted_data['revenue'],
				'employees' => $posted_data['employees'],
				'comments' => $posted_data['comments']
			),
			'cookies' => array()
		));
	}

	// Handle the 'Contact Us' form
	if ( '2118' == $contact_form->id ) {

		// The Zapier static webhook URL
		$url = 'https://hooks.zapier.com/hooks/catch/1895702/555j4v/';

		$result = wp_remote_post($url, array(
			'method' => 'POST',
			'timeout' => 45,
			'redirection' => 5,
			'httpversion' => '1.0',
			'blocking' => true,
			'headers' => array(),
			'body' => array(
				'first-name' => $posted_data['first-name'],
				'last-name' => $posted_data['last-name'],
				'business-name' => $posted_data['business-name'],
				'email' => $posted_data['your-email'],
				'message' => $posted_data['message']
			),
			'cookies' => array()
		));
	}

}, 10, 1);
