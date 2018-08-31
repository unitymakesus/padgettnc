<!doctype html>
<html {!! language_attributes() !!}>
  @include('partials.head')
  <body {!! body_class() !!}>
    @if (!is_user_logged_in())
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZPJJVP"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
    @endif
    <a href="#content" class="screen-reader-text">Skip to content</a>
    <!--[if IE]>
      <div class="alert alert-warning">
        {!! __('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage') !!}
      </div>
    <![endif]-->
    @php do_action('get_header') @endphp

<<<<<<< HEAD
    {{-- @if(is_front_page())
      @include('partials.header-home')
    @else
      @include('partials.header')
    @endif --}}

    @yield('header')
=======
    @yield('header');
>>>>>>> c3ab58228b885b4441c9f07af18b3698d0d961d3

    <div id="content" class="content" role="document">
      <div class="wrap">
        <main id="main" class="main" role="main">
          @yield('content')
        </main>
        @if (App\display_sidebar())
          <aside id="aside" class="sidebar" role="complimentary">
            @include('partials.sidebar')
          </aside>
        @endif
      </div>
    </div>
    @php do_action('get_footer') @endphp
    @include('partials.footer')
    @php wp_footer() @endphp
  </body>
</html>
