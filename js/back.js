$(window).load(function() {
    $(".load").fadeOut("slow");
    $(".wrapper").fadeOut("slow");
})

$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 75
				}, 1000);

				return false;
			}
		}
	});
});

$('body').scrollspy({ target: '#navbar-example' })

$(function () {
  $('[data-toggle="popover"]').popover()
})

function onSubmitForm() {
	if (document.form.math.value == 23) {
		return true;
	}
	else {
		alert("7 + 16 != "+ document.form.math.value);
		return false;
	}
}