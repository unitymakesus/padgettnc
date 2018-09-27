{{--
Template Name: Our Team
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
      <div class="row">
      @while ($staff->have_posts())
        @php $staff->the_post() @endphp
          <div class="col m4 staff-member">
            <a href="#team-<?php echo get_the_ID() ?>" class="inline">
              <div class="main-info">
                @php
                  $headshot = get_field('headshot');
                  $headshot_alt = get_field('headshot_alt');
                @endphp
                <img src="{{ $headshot['sizes']['large'] }}" alt="{{ the_title() }}"/>
                <img class="hover-pic" src="{{ $headshot_alt['sizes']['large'] }}" alt=""/>

                <div class="bioinfo">
                  <h3>{{ the_title() }}</h3>
                  <p><?php echo get_field('job_title')?></p>
                </div>
              </div>
            </a>

            <div class="modal" id="team-<?php echo get_the_ID() ?>">
              <div class="row">
                <div class="col s12 m4">
                  <img class="hover-pic" src="{{ $headshot_alt['sizes']['large'] }}" alt="{{ the_title() }}"/>
                </div>
                <div class="col s12 m8">
                  <h3>{{ the_title() }}</h3>
                  <p class="job-title"><?php echo get_field('job_title'); ?></p>
                  <?php echo wpautop(get_field('bio')); ?>
                </div>
              </div>
            </div>
          </div>
      @endwhile
    </div>
    @endif
    </div>
    @php wp_reset_postdata() @endphp
  </div>

@endsection
