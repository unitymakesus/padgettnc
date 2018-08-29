<header id="site-header" class="header-homepage banner" role="banner">
  <video muted autoplay loop poster="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/PadgettB-Roll.png">
    <source src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/PadgettB-Roll.webm" type="video/webm">
    <source src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/PadgettB-Roll.mp4" type="video/mp4">
  </video>

  <div class="nav-top row">
    <div class="col s6 l3">
      <a class="logo" href="{{ home_url('/') }}" rel="home">
        @if (has_custom_logo())
          @php
            $custom_logo_id = get_theme_mod( 'custom_logo' );
            $logo = wp_get_attachment_image_src( $custom_logo_id , 'logo' );
            $logo_2x = wp_get_attachment_image_src( $custom_logo_id, 'logo-2x' );
          @endphp
          <img src="{{ $logo[0] }}"
               srcset="{{ $logo[0] }} 1x, {{ $logo_2x[0] }} 2x"
               alt="{{ get_bloginfo('name', 'display') }}"
               width="{{ $logo[1] }}" height="{{ $logo[2] }}" />
        @else
          {{ get_bloginfo('name', 'display') }}
        @endif
      </a>
    </div>
    <div class="col s6 l3 offset-l6">
      <div class="topnav-wrapper">
        @if (has_nav_menu('top_navigation'))
          {!! wp_nav_menu(['theme_location' => 'top_navigation']) !!}
        @endif
        <a href="https://padgettnc.sharefile.com/" target="_blank" rel="noopener" class="btn btn-tertiary">Client Portal</a>
      </div>
    </div>
  </div>

  <div class="hero">
    <h1>{{$hero['header']}}</h1>
    <h3>{{$hero['subheader']}}</h3>
  </div>

  <div class="scroll-arrow">
    <p>&#x21fd;</p>
    <p>scroll to get started</p>
  </div>
</header>

<nav class="nav-primary" role="navigation">
  @if (has_nav_menu('primary_navigation'))
    <div class="menu-trigger-wrapper hide-on-large-only">
      <input type="checkbox" name="menu-trigger" id="menu-trigger" value="true" />
      <label for="menu-trigger"><i class="material-icons" aria-label="Show navigation menu">menu</i></a>
    </div>
    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-menu']) !!}
  @endif
</nav>
