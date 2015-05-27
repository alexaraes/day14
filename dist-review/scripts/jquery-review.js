// $(document).on('ready', function() {
// 	var counter = 0;

// 	function greet() {
// 		console.log('Hello');
// 	}
// 	function goodbye() {
// 		counter++;
// 		console.log('Good bye');

// 		if(counter >= 3) {
// 			clearInterval(goodbyeIntervalId);
// 		}
// 	}

// 	// setTimeout(greet, 2000);
// 	setInterval(greet, 2000);
// 	var goodbyeIntervalId = setInterval(goodbye, 2000);

// });


//event bubbling

$(document).on('ready', function() {
	var $parent = $('#parent');
	var $child = $('#child');
	var $grandchild = $('#grandchild');
	var $greatgrandchild = $('greatgrandchild');

	$parent.on('click', handlerA);
	function handlerA(e) {
		console.log('child', e.target.id, e.currentTarget.id);
	}

	$child.on('click', handlerB);
	function handlerB(e) {
		console.log('child', e.target.id, e.currentTarget.id);
	}

	$grandchild.on('click', handlerC);
	function handlerC(e) {
		console.log('child', e.target.id, e.currentTarget.id);
	}

	$greatgrandchild.on('click', handlerD);
	function handlerD(e) {
		console.log('child', e.target.id, e.currentTarget.id);
	}
});