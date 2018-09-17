<a class="post-container col m4 s12" href="<?php the_permalink() ?>">
  <div>
    <?php if (has_post_thumbnail()) the_post_thumbnail( 'medium' ); ?>
    <p><?php the_excerpt(); ?></p>
  </div>
</a>
