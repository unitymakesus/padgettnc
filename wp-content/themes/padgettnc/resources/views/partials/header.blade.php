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
      <a href="https://padgettnc.sharefile.com/" target="_blank" rel="noopener" class="btn btn-client btn-tertiary">Client Portal</a>
    </div>
  </div>
</div>
