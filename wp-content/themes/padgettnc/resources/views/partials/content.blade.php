  <!-- <article class="col m4 post-container">
      <div class="post-wrap">
        <header class="post-header">
          <img src="{!! get_the_post_thumbnail_url($id, 'medium') !!}')"> -->
          <!-- <h2 class="entry-title"><a href="{{ get_permalink() }}">{{ get_the_title() }}</a></h2> -->
          <!-- @include('partials/entry-meta') -->
        <!-- </header>
        <div class="entry-summary">
          @php the_excerpt() @endphp
          <a href="{{ get_permalink() }}">Read More ></a>
        </div>
      </div>
  </article> -->

  <div class="client-spotlight">
    <div class="client-spotlight-card container">
      <h2>{{ get_the_title() }}</h2>
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
