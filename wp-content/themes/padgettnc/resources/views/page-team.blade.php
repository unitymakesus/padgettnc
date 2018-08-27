{{--
Template Name: Our Team
--}}

@extends('layouts.app')
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
    <div class="row">
      @while ($staff->have_posts())
        @php $staff->the_post() @endphp
          <div class="col m4 staff-member">
            <a href="#team-<?php echo get_the_ID() ?>" class="inline">
              <div class="main-info">
                <img src="<?php echo get_field('headshot')?>" alt="{{ the_title() }}"/>
                <img class="hover-pic" src="<?php echo get_field('headshot_alt')?>" alt="{{ the_title() }}"/>

                <div class="bioinfo">
                  <h3>{{ the_title() }}</h3>
                  <p><?php echo get_field('job_title')?></p>
                </div>
              </div>
            </a>

            <div class="modal" id="team-<?php echo get_the_ID() ?>">
              <?php echo get_field('bio')?>
            </div>
          </div>
      @endwhile
    @endif
    </div>
    @php wp_reset_postdata() @endphp
  </div>

@endsection
