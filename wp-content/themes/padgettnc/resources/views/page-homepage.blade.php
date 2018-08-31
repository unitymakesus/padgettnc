{{--
  Template Name: Homepage Template
--}}

@extends('layouts.app')

@section('header')
  <header id="site-header" class="header-homepage banner" role="banner">
    <video muted autoplay loop poster="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/padgettb-roll.jpg">
      <source src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/padgettb-roll.webm" type="video/webm">
      <source src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/padgettb-roll.mp4" type="video/mp4">
    </video>

    @include('partials.header')

    <div class="hero">
      <h1>{{$hero['header']}}</h1>
      <h2>{{$hero['subheader']}}</h2>
      <div class="scroll-arrow">
        <p>&#x21fd;</p>
        <p>scroll to get started</p>
      </div>
    </div>

  </header>

  @include('partials.navigation')
@endsection

@section('content')
  <div class="why-padgett container">
    @if($why)
      <h2>{{ $why['header'] }}</h2>
      <p>{!! $why['text'] !!}</p>
    @endif
  </div>

  <div class="our-values">
    @if(($values))
      <div class="row">
      @foreach($values as $value)
        <article class="col s12 m6 l3">
            <img src="{{ $value['icon']}} "/>
            <h3>{{ $value['title'] }}</h3>
            <p> {{ $value['text'] }}</p>
          <div class="hover-quote">
            <p>{!! $value['hover_quote'] !!}</p>
          </div>
        </article>
      @endforeach
      </div>
    @endif
  </div>

  <div class="our-services container">
    @if(($services))
      @php
        $side = ['top', 'left', 'back', 'bottom', 'right', 'front'];
        $i = 0;
        $j = 0;
      @endphp

      @foreach($services as $service)
        <div class="diamond diamond-service {{ $side[$i] }}" data-side="{{ $side[$i] }}">
          <div class="diamond-content">
            <h3>{{ $service['title'] }}</h3>
            {{-- <img class="hover-icon" src="{{ $value['icon']}} "/> --}}
          </div>
        </div>
        @php $i++; @endphp
      @endforeach

      <div class="diamond-cube-container">
        <div class="diamond-cube">
          @foreach($services as $service)
            <div class="diamond-cube-side {{ $side[$j] }}">
              <div class="diamond-content">
                <h3>{{ $service['title'] }}</h3>
                <p>{{ $service['text'] }}</p>
                <a class="btn btn-tertiary" href="{{ $service['cta_link'] }}">Learn More</a>
              </div>
            </div>
            @php $j++; @endphp
          @endforeach
        </div>

        <div class="diamond diamond-cube-side diamond-cube-default show">
          <div class="diamond-content">
            <h3>What we do</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    @endif
  </div>

  <?php $the_query = new WP_Query( array( 'category_name' => 'client-spotlight', 'posts_per_page' => 1 ) ); ?>
    <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
      <div class="client-spotlight">
        <div class="client-spotlight-card container">
          <h2>Client Spotlight</h2>
          <div class="row">
            <div class="col l6 m12 company-logo">
              <?php if (has_post_thumbnail()) the_post_thumbnail( 'medium' ); ?>
            </div>
            <div class="col l6 m12">
              <p><?php the_excerpt(); ?></p>

              <a class="btn btn-primary" href="<?php the_permalink() ?>">Read More</a>
            </div>
          </div>
        </div>
      </div>
      <?php endwhile; wp_reset_postdata(); ?>

      <?php $the_query = new WP_Query( array( 'post_type' => 'reviews', 'posts_per_page' => 3 ) ); ?>
      <div class="google-review container">
        <div class="row">
          <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
            <div class="col m4">
              <img src="<?php echo get_field('profile_image')?>" alt="{{ the_title() }}"/>
              <h3>{{ the_title() }}</h3>
              <p><?php echo get_field('excerpt')?></p>
              <a href="<?php echo get_field('full_link')?>">Read More ></a>
            </div>
          <?php endwhile; wp_reset_postdata(); ?>
        </div>
        <br><br>
        <a class="btn btn-primary" href="#">See all Google Reviews</a>
      </div>

      @if(($cta))
      <div class="cta" style="background-image: url({!! $cta['image'] !!})">
        <h2>{{ $cta['header'] }}</h2>
        <a class="btn btn-tertiary" href="{!! $cta['cta_link'] !!}">{{ $cta['cta_text'] }}</a>
      </div>
      @endif
@endsection
