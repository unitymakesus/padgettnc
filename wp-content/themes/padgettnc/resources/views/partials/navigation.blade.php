<nav class="nav-primary" role="navigation">
  @if (has_nav_menu('primary_navigation'))
    <div class="menu-trigger-wrapper hide-on-large-only">
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
      <div>
        <input type="checkbox" name="menu-trigger" id="menu-trigger" value="true" />
        <label for="menu-trigger">&#9776;</a>
      </div>
    </div>
    {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-menu']) !!}
  @endif
</nav>
