<?php

namespace App;

use Sober\Controller\Controller;

class PageTeam extends Controller
{
  public function jobtitle() {
    return get_field('job_title');
  }

  public function headshotReg() {
    return get_field('headshot');
  }

  public function headshotAlt() {
    return get_field('headshot_alt');
  }

  public function bio() {
    return get_field('bio');
  }
}
