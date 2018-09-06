// import external dependencies
import 'jquery';
// import 'materialize-css';
import 'modaal';

// Import everything from autoload
import "./autoload/*"

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';

var WebFont = require('webfontloader');

WebFont.load({
 google: {
   families: ['Hind:400,500,600,700', 'Roboto:300, 300i, 400i,700,700i'],
 },
});

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
