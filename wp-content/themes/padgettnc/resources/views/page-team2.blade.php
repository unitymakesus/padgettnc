{{--
Template Name: Our Team2
--}}

@extends('layouts.app')

@section('header')
  <header id="main-site-header" class="banner" style="background-image: url('{!! get_the_post_thumbnail_url($id, 'large') !!}')">
    @include('partials.header')
    @include('partials.navigation')
  </header>
@endsection

@section('content')
  @include('partials.page-header')

    <?php
      $staff = new WP_Query([
        'post_type' => 'staff',
        'posts_per_page' => -1,
        'facetwp' => true,
        'orderby' => 'menu_order',
        'order' => 'ASC'
      ]);
    ?>

    @if ($staff->have_posts())
    <div class="container">
      @while ($staff->have_posts())
        @php $staff->the_post() @endphp
        <div class="row peoples">
          <div class="col m4 staff-member">
            <div class="main-info">
              <img src="<?php echo get_field('headshot')?>" alt="{{ the_title() }}"/>
              <img class="hover-pic" src="<?php echo get_field('headshot_alt')?>" alt="{{ the_title() }}"/>
            </div>
          </div>

          <div class="col s12 m8 info">
            <h2>{{ the_title() }}</h2>
            <p><?php echo get_field('job_title')?></p>
            <?php echo get_field('bio')?>
          </div>
        </div>
      @endwhile
    @endif
    </div>
    @php wp_reset_postdata() @endphp
  </div>

@endsection
