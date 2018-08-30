@extends('layouts.app')

@section('header')
  <header id="main-site-header" class="banner" style="background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/images/calculator.jpg)">
    @include('partials.header')
    @include('partials.navigation')
  </header>
@endsection

@section('content')
  @include('partials.page-header')

  @if (!have_posts())
  <div class="container">
    <div class="alert alert-warning">
      {{ __('Sorry, but the page you were trying to view does not exist.', 'sage') }}
    </div>
    {!! get_search_form(false) !!}
  </div>
  @endif
@endsection
