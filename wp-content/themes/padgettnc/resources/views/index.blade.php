@extends('layouts.app')

@section('content')
  @include('partials.page-header')

  @if (!have_posts())
    <div class="alert alert-warning">
      {{ __('Sorry, no results were found.', 'sage') }}
    </div>
    {!! get_search_form(false) !!}
  @endif

    <div class="row posts">
      @php $i = 0; @endphp
      @while (have_posts()) @php the_post() @endphp
        @if($i % 3 === 0)
      </div><div class="row posts">
        @endif
        @include('partials.content-'.get_post_type())
        @php $i++; @endphp
      @endwhile
    </div>

  {!! get_the_posts_navigation() !!}
@endsection
