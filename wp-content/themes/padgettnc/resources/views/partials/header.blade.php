<a class="brand" href="{{ home_url('/') }}">{{ get_bloginfo('name', 'display') }}</a>
@if (has_nav_menu('top_navigation'))
  {!! wp_nav_menu(['theme_location' => 'top_navigation', 'menu_class' => 'top-nav']) !!}
@endif

<header class="banner">
    <nav class="nav-primary">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav']) !!}
      @endif
    </nav>
</header>
