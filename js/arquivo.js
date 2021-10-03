window.addEventListener('load', function(){
	// btn-11
	var movingBar = new MovingBar('.btn-11');
	// btn-12
	var delLineBar = new DelLineBar('.btn-12');
	// btn-13 : Hover Moving Dot
	var movingDot = new MovingDot('.btn-13');
});

// btn-11 : Moving Bar
function MovingBar( nav ){
	var $navMovingBar = document.querySelector( nav ),
		$btnMenu11 = $navMovingBar.querySelectorAll('a'),
		bar = document.createElement('span'),
		width, left;

	bar.classList.add('effect');
	$navMovingBar.appendChild( bar );

	for( var i=0, max=$btnMenu11.length; i<max; i++ ){
		$btnMenu11[i].addEventListener('mouseenter', function(){
			width = this.offsetWidth,
			left = this.offsetLeft;
			barMovingCurrentMenu( width, left );
		});
	}

	function barMovingCurrentMenu( width, left ) {
		bar.style.width = width + 'px';
		bar.style.left = left + 'px';
	}
}

// btn-12 : Del Line Bar
function DelLineBar( nav ){
	var $navDelLineBar = document.querySelector( nav ),
       $btnMenu12 = $navDelLineBar.querySelectorAll('a');

   for( var i=0, max=$btnMenu12.length; i<max; i++ ){
		$btnMenu12[i].addEventListener('mouseenter', function(){
			for( var j=0; j<$btnMenu12.length; j++ ){
				$btnMenu12[j].classList.remove('off');
				if( $btnMenu12[j] == this ) continue;
				$btnMenu12[j].classList.add('off');
			}
		});
	}

	$navDelLineBar.addEventListener('mouseleave', function(){
		for( var i=0, max=$btnMenu12.length; i<max; i++ ){
			if( !$btnMenu12[i].classList.contains('off') ) continue;
			$btnMenu12[i].classList.remove('off');
		}
	});
}

// btn-13 : Moving Dot
function MovingDot( nav ){
	var $navMovingDotBar = document.querySelector( nav ),
	 	 $btnMenu13 = $navMovingDotBar.querySelectorAll('a'),
		 bar2 = document.createElement('span'),
		 width2, left2;

	bar2.classList.add('dot');
	$navMovingDotBar.appendChild( bar2 );

	for( var i=0, max=$btnMenu13.length; i<max; i++ ){
		$btnMenu13[i].addEventListener('mouseenter', function(){
			width2 = this.offsetWidth,
			left2 = this.offsetLeft;
			barMovingCurrentMenu2( width2, left2 );
		});
	}

	function barMovingCurrentMenu2( width, left ) {
		bar2.style.left = left + ( width / 2 ) + 'px';
		bar2.style.opacity = 1;
	}
}


