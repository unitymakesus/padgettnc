{{--
  Template Name: Homepage Template
--}}

@extends('layouts.app')

@section('content')
  <div class="why-padgett container">
    @if($why)
      <h2>{{ $why['header'] }}</h2>
      <p>{!! $why['text'] !!}</p>
    @endif
  </div>

  <div class="our-values">
    @if(($values))
      <div class="row">
      @foreach($values as $value)
        <article class="col s12 m6 l3">
            <img src="{{ $value['icon']}} "/>
            <h3>{{ $value['title'] }}</h3>
            <p> {{ $value['text'] }}</p>
          <div class="hover-quote">
            <p>{!! $value['hover_quote'] !!}</p>
          </div>
        </article>
      @endforeach
      </div>
    @endif
  </div>

  <div class="our-services container">
    @if(($services))
      @foreach($services as $service)
        <article>
          <h3>{{ $service['title'] }}</h3>
          <div class="hover-service">
            <p>{{ $service['title'] }}</p>
            <p>{{ $service['text'] }}</p>
            <a href="{{ $service['cta_link'] }}">Learn More</a>
            <img src="{{ $value['icon']}} "/>
          </div>
        </article>
      @endforeach
    @endif
  </div>

  <div class="client-spotlight container">
    <p>this is where the client spotlight will live</p>
  </div>

  <div class="review">
    <p>this is where the google reviews will live</p>
  </div>
@endsection
