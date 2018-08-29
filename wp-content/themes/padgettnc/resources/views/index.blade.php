@extends('layouts.app')

@section('header')
  @if(is_category())
    @php
      $category = get_the_category();
      $background = get_wp_term_image($category[0]->cat_ID);
    @endphp
  @else
    @php $background = asset_path('PadgetB-Roll.png') @endphp
  @endif
  <header id="main-site-header" class="banner" style="background-image:url('');">
    @include('partials.header')
    @include('partials.navigation')
  </header>
@endsection

@section('content')
  @include('partials.page-header')

  @if (!have_posts())
    <div class="alert alert-warning">
      {{ __('Sorry, no results were found.', 'sage') }}
    </div>
    {!! get_search_form(false) !!}
  @endif

    <div class="row posts">
      @php $i = 0; @endphp
      @while (have_posts()) @php the_post() @endphp
        @if($i % 3 === 0)
      </div><div class="row posts">
        @endif
        @include('partials.content-'.get_post_type())
        @php $i++; @endphp
      @endwhile
    </div>

  {!! get_the_posts_navigation() !!}
@endsection
