$(document).ready(function() {


    $(".navigation li").click(function(e) {
        e.preventDefault();
        $(".navigation li").removeClass('active');
        $(this).addClass('active');
      })



    //button scroll to top
	$("#back-top").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
    });


    // function openPopup() {
    //     var popup = document.getElementsByClassName("popup-reservations");
    //     popup.classList.toggle("seen");
    // }


    // openPopup();

}); 
