<?php

namespace App;

use Sober\Controller\Controller;

class PageTeam extends Controller
{
  public function jobtitle() {
    if (function_exists('get_field')) {
      return get_field('job_title');
    }
  }

  public function headshotReg() {
    if (function_exists('get_field')) {
      return get_field('headshot');
    }
  }

  public function headshotAlt() {
    if (function_exists('get_field')) {
      return get_field('headshot_alt');
    }
  }

  public function bio() {
    if (function_exists('get_field')) {
      return get_field('bio');
    }
  }
}
