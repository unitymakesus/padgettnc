<div class="post-container col m4 s12">
  <a class="mega-link" href="{{ the_permalink() }}" aria-hidden="true"></a>
  @if (in_category('client-spotlight'))
      <div class="img-wrapper">
        @php the_post_thumbnail( 'medium', ['alt' => get_the_title()] ) @endphp
      </div>
  @else
    @php the_post_thumbnail( 'medium', ['class' => 'full-width', 'alt' => get_the_title()] ) @endphp
    <h2 class="post-title">{{ the_title() }}</h2>
  @endif
  <p>{{ the_excerpt() }}</p>
  <a class="btn btn-secondary" href="{{ the_permalink() }}">Read More</a>
</div>
