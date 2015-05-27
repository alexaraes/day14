$(document).on('ready', start);

function start(e) {

	var $button = $('#likes')
	var clicks = '0';

	$button.on('click', onClick);

	function onClick() {
		clicks = parseInt(clicks) + 1; 
			if (clicks === 0 || clicks > 1) {
				$button.html(parseInt(clicks) + ' Likes');
			}
			else {
				$button.html(parseInt(clicks) + ' Like');
			}
			console.log(clicks);
	};



};