

$('.portfolio').masonry({
  // options
  itemSelector: '.col-md-4',
  percentPosition: true
});


$(window).load(function () {
	$(".loaded").fadeOut();
	$(".preloader").delay(1000).fadeOut("slow");
});

if (screen.width < 960) {
    // skill bar

    $(function() {
    	$('.progressbar').each(function(){
    		var t = $(this);
    		var dataperc = t.attr('data-perc'),
    				barperc = Math.round(dataperc*1.68);
    		t.find('.bar').animate({width:barperc}, dataperc*1500);
    		t.find('.label').append('<div class="perc"></div>');


    		function perc() {
    			var length = t.find('.bar').css('width'),
    				perc = Math.round(parseInt(length)/1.68),
    				labelpos = (parseInt(length)-2);
    			t.find('.label').css('left', labelpos);
    			t.find('.perc').text(perc+'%');
    		}
    		perc();
    		setInterval(perc, 0);
    	});
    });
}


else {
    // skill bar

    $(function() {
    	$('.progressbar').each(function(){
    		var t = $(this);
    		var dataperc = t.attr('data-perc'),
    				barperc = Math.round(dataperc*5.56);
    		t.find('.bar').animate({width:barperc}, dataperc*1500);
    		t.find('.label').append('<div class="perc"></div>');


    		function perc() {
    			var length = t.find('.bar').css('width'),
    				perc = Math.round(parseInt(length)/5.56),
    				labelpos = (parseInt(length)-2);
    			t.find('.label').css('left', labelpos);
    			t.find('.perc').text(perc+'%');
    		}
    		perc();
    		setInterval(perc, 0);
    	});
    });
}
