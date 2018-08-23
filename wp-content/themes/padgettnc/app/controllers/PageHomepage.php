<?php

namespace App;

use Sober\Controller\Controller;

class PageHomepage extends Controller
{
  public function why() {
    return get_field('why_padgett');
  }

  public function values() {
    return get_field('our_values');
  }

  public function services() {
    return get_field('our_services');
  }

  public function cta() {
    return get_field('cta');
  }
}
