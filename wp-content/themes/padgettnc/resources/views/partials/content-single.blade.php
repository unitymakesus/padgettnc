<article class="container" @php post_class() @endphp>
  <header>
    <div class="page-header">
      <h1>
        @if (in_category('client-spotlights'))
          Client Spotlight:
        @endif
        {{ get_the_title() }}
      </h1>
    </div>
    <a href="<?php echo get_field('site-link')?>">
      <?php if (has_post_thumbnail()) the_post_thumbnail( 'medium' ); ?>
    </a>
  </header>
  <div class="entry-content">
    @php the_content() @endphp
  </div>
</article>
