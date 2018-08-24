@if(is_front_page())
  <header id="site-header" class="header-homepage">
    <video muted autoplay loop poster="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Video-Screenshot.png">
      <source src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Mt_Baker.webm" type="video/webm">
      <source src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/Mt_Baker.mp4" type="video/mp4">
    </video>
@else
  <header id="site-header">
@endif
  <div class="nav-top row">
    <div class="col s3">
      <a class="logo" href="{{ home_url('/') }}" rel="home">
        @if (has_custom_logo())
          @php
            $custom_logo_id = get_theme_mod( 'custom_logo' );
            $logo = wp_get_attachment_image_src( $custom_logo_id , 'logo' );
          @endphp

          <img class="logo"
               src="{{ $logo[0] }}"
               srcset="{{ $logo[0] }}"
               alt="{{ get_bloginfo('name', 'display') }}" />
        @else
          {{ get_bloginfo('name', 'display') }}
        @endif
      </a>
    </div>
    <div class="col s3 offset-s6">
      <div class="topnav-wrapper">
        @if (has_nav_menu('top_navigation'))
          {!! wp_nav_menu(['theme_location' => 'top_navigation']) !!}
        @endif
        <a href="#" class="btn btn-tertiary">Client Portal</a>
      </div>
    </div>
  </div>

  @if(is_front_page())
    <div class="hero">
      <h1>{{$hero['header']}}</h1>
      <h3>{{$hero['subheader']}}</h3>
    </div>

    <div class="scroll-arrow">
      <p>&#x21fd;</p>
      <p>scroll to get started</p>
    </div>
  @endif
</header>

<nav class="nav-primary">
  <div class="menu-trigger-wrapper hide-on-large-only">
    <input type="checkbox" name="menu-trigger" id="menu-trigger" value="true" />
    <label for="menu-trigger"><i class="material-icons" aria-label="Show navigation menu">menu</i></a>
  </div>
  @if (has_nav_menu('primary_navigation'))
    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
  @endif
</nav>
