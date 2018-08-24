<footer class="content-info" role="contentinfo">
  <div class="row footer-logos">
    @php dynamic_sidebar('footer-logos') @endphp
  </div>

  <div class="row footer-contact">
    <div class="col l4 s12">
      @php dynamic_sidebar('footer-left') @endphp
    </div>
    <div class="col l4 s12">
      @php dynamic_sidebar('footer-center') @endphp
    </div>

    <div class="col l4 s12">
      @php dynamic_sidebar('footer-right') @endphp
    </div>
  </div>

  <div class="footer-copyright">
    <div class="row">
      <div class="col m4 s12">
        <span class="copyright">&copy; {{ current_time('Y') }} Padgett NC, All Rights Reserved</span>
      </div>
      <div class="col m4 s12 privacy-wrapper">
        <a class="privacy" href="<?php get_site_url()?>/privacy-policy/"> Privacy Policy</a>
      </div>

      <div class="col m4 s12">
        @include('partials.unity')
      </div>
    </div>
  </div>
</footer>
