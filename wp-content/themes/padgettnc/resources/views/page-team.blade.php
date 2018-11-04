{{--
Template Name: Our Team
--}}

@extends('layouts.app')

@section('header')
  <header id="main-site-header" class="banner" style="background-image: url('{!! get_the_post_thumbnail_url($id, 'large') !!}')">
    @include('partials.header')
    @include('partials.navigation')
  </header>
@endsection

@section('content')
  @include('partials.page-header')

    <?php
      $staff = new WP_Query([
        'post_type' => 'staff',
        'posts_per_page' => -1,
        'facetwp' => true,
        'orderby' => 'menu_order',
        'order' => 'ASC'
      ]);
    ?>

    @if ($staff->have_posts())
    <div class="container-fixed">
      <div class="row">
      @while ($staff->have_posts())
        @php $staff->the_post() @endphp
        <div class="col xl4 l4 m6 s12">
          <div class="staff-card-container">
            <div class="staff-card">
              <div class="card-front">
                <div class="card-side-container">
                  <img class="diamondlogo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/diamondlogo.png">

                  @php
                    $headshot = get_field('headshot');
                    $headshot_alt = get_field('headshot_alt');
                    $closeup = get_field('headshot_face_closeup');
                  @endphp
                  <div class="headshot-container">
                    <img class="headshot" src="{{ $headshot['sizes']['large'] }}" alt="{{ the_title() }}"/>
                    <img class="headshot hover-pic" src="{{ $headshot_alt['sizes']['large'] }}" alt=""/>
                  </div>

                  <div class="bioinfo">
                    <div class="ribbon">
                      <span>{{ the_title() }}</span>
                    </div>
                    <p><?php echo get_field('job_title')?></p>
                  </div>
                </div>
              </div>

              <div class="card-back">
                <div class="card-side-container">
                  <div class="cropped-container">
                    <div class="cropped-img">
                      <img src="{{ $closeup['sizes']['thumbnail'] }}" alt="{{ the_title() }}"/>
                    </div>
                    <div class="logo-diamond lt"></div>
                    <div class="logo-diamond rt"></div>
                  </div>

                  <div class="bioinfo">
                    <div class="ribbon">
                      <span>{{ the_title() }}</span>
                    </div>
                    <p><?php echo get_field('job_title')?></p>
                  </div>

                  @if (get_field('license_number'))
                    <div class="license">{{ get_field('license_number') }}</div>
                  @endif
                  <div class="profile-info">
                    @if(get_field('hometown'))
                      <p><strong>Hometown:</strong> <?php echo get_field('hometown'); ?></p>
                    @endif
                    @if(get_field('college'))
                      <p><strong>College:</strong> <?php echo get_field('college'); ?></p>
                    @endif
                    @if(get_field('degree'))
                      <p><strong>Degree:</strong> <?php echo get_field('degree');   ?></p>
                    @endif
                    <hr>

                    <?php
                    	$repeater = get_field( 'fun_facts' );
                    	$random_rows = array_rand( $repeater, 2 );
                    	if( is_array( $random_rows ) ){
                    		foreach( $random_rows as $random_row ){
                    			echo '<p><strong>' . $repeater[$random_row]['fact_title'] . ':</strong>';
                    			echo ' ' . $repeater[$random_row]['fact_text'] . '</p>';
                    		}
                    	} else {
                    		echo '<p><strong>' . $repeater[$random_rows]['fact_title'] . ':</strong>';
                    		echo ' ' . $repeater[$random_rows]['fact_text'] . '</p>';
                    	}
                    ?>
                  </div>

                  <div class="contact-info">
                    @if(get_field('email'))
                      <div class="team-icons">
                        <img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/email.png">
                        <a href="mailto:<?php echo get_field('email')?>" target="_blank">
                        <?php echo get_field('email')?></a>
                      </div>
                    @endif

                    @if(get_field('phone'))
                      <div class="team-icons">
                        <img class="icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/phone.png">
                        <a href="tel:<?php echo get_field('phone')?>" target="_blank"><?php echo get_field('phone')?></a>
                      </div>
                    @endif
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      @endwhile
      @endif
      </div>
    </div>
  @php wp_reset_postdata() @endphp
@endsection
