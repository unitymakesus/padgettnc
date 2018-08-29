<?php

namespace App;

use Sober\Controller\Controller;

class PageHomepage extends Controller
{
  public function why() {
    if (function_exists('get_field')) {
      return get_field('why_padgett');
    }
  }

  public function values() {
    if (function_exists('get_field')) {
      return get_field('our_values');
    }
  }

  public function services() {
    if (function_exists('get_field')) {
      return get_field('our_services');
    }
  }

  public function cta() {
    if (function_exists('get_field')) {
      return get_field('cta');
    }
  }
}
