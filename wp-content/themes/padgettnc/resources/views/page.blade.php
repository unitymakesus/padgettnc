@extends('layouts.app')

@section('header')
  @if(has_post_thumbnail())
    <header id="main-site-header" class="banner" style="background-image: url('{!! get_the_post_thumbnail_url($id, 'large') !!}')">

  @else
    <header id="main-site-header" class="banner" style="background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/images/calculator.jpg)">
  @endif

    @include('partials.header')
    @include('partials.navigation')
  </header>
@endsection

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.page-header')
    @include('partials.content-page')
  @endwhile
@endsection
