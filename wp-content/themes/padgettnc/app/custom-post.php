<?php

namespace App;

// Team Post Type
function staff_post_type() {
	$labels = array(
		'name' => _x("Staff", "post type general name"),
		'singular_name' => _x("Staff", "post type singular name"),
		'menu_name' => 'Staff Members',
		'add_new' => _x("Add New", "staff profile"),
		'add_new_item' => __("Add New Staff Member"),
		'edit_item' => __("Edit Profile"),
		'new_item' => __("New Profile"),
		'view_item' => __("View Profile"),
		'parent_item_colon' => ''
	);

	register_post_type('staff' , array(
		'labels' => $labels,
		'exclude_from_search' => true,
    'publicly_queryable' => true,
    'show_in_nav_menus' => false,
    'query_var' => false,
    'show_ui' => true,
    'has_archive' => true,
		'menu_icon' => 'dashicons-admin-users',
		'supports' => array('title', 'editor', 'page-attributes')
	) );

  register_taxonomy( strtolower($singular), 'staff', array(
    'public' => false,
    'show_ui' => true,
    'show_in_nav_menus' => false,
    'hierarchical' => false,
    'query_var' => true,
    'rewrite' => false,
    'labels' => $labels
  ) );
}

add_action( 'init', __NAMESPACE__.'\\staff_post_type' );


// Team Post Type
function reviews_post_type() {
	$labels = array(
		'name' => _x("Reviews", "post type general name"),
		'singular_name' => _x("Review", "post type singular name"),
		'menu_name' => 'Google Reviews',
		'add_new' => _x("Add New", "review"),
		'add_new_item' => __("Add New Review"),
		'edit_item' => __("Edit Review"),
		'new_item' => __("New Review"),
		'view_item' => __("View Review"),
		'parent_item_colon' => ''
	);

	register_post_type('reviews' , array(
		'labels' => $labels,
		'exclude_from_search' => true,
    'publicly_queryable' => true,
    'show_in_nav_menus' => false,
    'query_var' => false,
    'show_ui' => true,
    'has_archive' => true,
		'menu_icon' => 'dashicons-list-view',
		'supports' => array('title', 'editor', 'page-attributes')
	) );

  register_taxonomy( strtolower($singular), 'reviews', array(
    'public' => false,
    'show_ui' => true,
    'show_in_nav_menus' => false,
    'hierarchical' => false,
    'query_var' => true,
    'rewrite' => false,
    'labels' => $labels
  ) );
}

add_action( 'init', __NAMESPACE__.'\\reviews_post_type' );
