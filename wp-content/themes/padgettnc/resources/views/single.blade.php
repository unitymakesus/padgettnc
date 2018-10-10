@extends('layouts.app')

@section('header')
  <header id="main-site-header" class="banner" style="background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/images/restaurant.jpg)">
    @include('partials.header')
    @include('partials.navigation')
  </header>
@endsection

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.content-single-'.get_post_type())
  @endwhile
@endsection
