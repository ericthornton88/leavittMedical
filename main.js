$(function() {
	//Mobile nav menu
	$('.header-container > img').on('click', function() {
		$('body').find('header .header-line-menu').toggleClass('show');
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


	//Contact us form
  	$('form').on('submit', function(e) {
  	  	e.preventDefault();
		$.ajax({
		  method: "POST",
		  dataType: "jsonp",
		  url: "https://leavittmd.zendesk.com/requests/embedded/create/",
		  data: $("#feedback-form").serialize(),
		  success: function(data, textStatus) {
		        if (data) {
		            // data.redirect contains the string URL to redirect to
		            window.location.href = "leavitt.md";
		        }
		        else {
		            // data.form contains the HTML for the replacement form
		            $("#myform").replaceWith(data.form);
		        }
	    	}
		})
		$('#subject').val('');
		$('#description').val('');
		$('#name').val('');
		$('#email').val('');
		$('#alert').show(0).delay(2000).hide(0);
  	})
  	
})
