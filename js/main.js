$(function() {


	//Mobile nav menu
	$('.header-container > img').on('click', function() {
		$('body').find('header .header-line-menu').toggleClass('show');
	})

	
	//Provides and gets rid of the options under 'Solutions'
	$('.header-container nav > a:nth-child(2)').click(function(e) {
	  	e.preventDefault();
	  	$(this).siblings('div').show()
	})
	
	$('.header-container nav > div').mouseleave(function() {
	  	$(this).hide()
	})
	$('.header-container nav > a:nth-child(3)').mouseenter(function() {
	  	$(this).siblings('div').hide();
	})
	$('.header-container nav > a:nth-child(4)').mouseenter(function() {
	  	$(this).siblings('div').hide();
	})
	$('.hero').mouseenter(function() {
	  	$('body').find('.header-container nav > div').hide();
	})

	//Video Load
	$('.support-container > div:nth-child(2)').on('click', function() {
		$('.videos-container').show();
	})


	//Mobile. Shows the pop up box with info about the employee
	$('.more-about-btn').on('click', function() {
		var tsm = $('body').find('.team-lightbox')
		tsm.show();
		var p1 = $(this).parent('.bio-text-description-container').find('> div:nth-child(4)').text();
		var p2 = $(this).parent('.bio-text-description-container').find('> div:nth-child(5)').text();
		var title = $(this).parent('.bio-text-description-container').find('> div:first-child').text();
		tsm.find('> div:nth-child(2)').text(title);
		tsm.find('> div:nth-child(3)').text(p1);
		tsm.find('> div:nth-child(4)').text(p2);
	})

	//Mobile. Exit button on the pop up box with employee info
	$('body').on('click', '.team-lightbox .exit', function() {
	  	$('.team-lightbox').hide()
	})

	if (document.location == 'http://localhost/leavittHome/contact.php?success=1') {
		$('#alert > div').text('Your message has been sent');
		$('#alert').show(0).delay(3000).hide(0);
	};

	if (document.location == 'http://localhost/leavittHome/contact.php?success=0') {
		$('#alert > div').text('Message failed. Please contact us by phone.');
		// $('#subject').text(subject);
		// $('#description').text(description);
		// $('#name').text(name);
		// $('#email').text(email);
		$('#alert').css('background-color', '#FF4040');
		$('#alert').show(0).delay(3000).hide(0);
	};
	//Contact us form
  	$('form').on('submit', function(e) {
  // 	  	e.preventDefault();
		// $.ajax({
		//   method: "POST",
		//   dataType: "jsonp",
		//   url: "https://leavittmd.zendesk.com/requests/embedded/create/",
		//   data: $("#feedback-form").serialize(),
		//   success: function(data, textStatus) {
		//         if (data) {
		//             // data.redirect contains the string URL to redirect to
		//             window.location.href = "leavitt.md";
		//         }
		//         else {
		//             // data.form contains the HTML for the replacement form
		//             $("#myform").replaceWith(data.form);
		//         }
	 //    	}
		// })
		// subject = $('#subject').val('');
		// description = $('#description').val('');
		// name = $('#name').val('');
		// email = $('#email').val('');
		//$('#alert').show(0).delay(2000).hide(0);
  	})
  	
})
