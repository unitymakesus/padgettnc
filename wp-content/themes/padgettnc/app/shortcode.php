<?php

namespace App;

/**
 * Staff list shortcode
 */
add_shortcode('cta-button', function($atts) {
	ob_start();

	if ($atts['align'] == 'center') {
		?>
		<div style="text-align:center;">
			<a class="btn btn-getstarted" href="/get-started/">Let's Get Started</a>
		</div>
		<?php
	}

	return ob_get_clean();
});
