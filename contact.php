<?php include_once 'header.php'; ?>

	<div class="header-filler"></div>
	<div id="alert">
		<div>
			Your message has been received
		</div>
	</div>
	<div class="contact-container center-container">
		<div>Contact Us</div>
		<div class="footer-container address">
			<div><span>Leavitt Medical Inc.</span> 1018 South 350 East Provo, UT 84606</div>
			<div>Ph: 844-987-2267 Fx:844-266-9834 support@leavitt.md</div>
		</div>
		<div>Send us a message</div> 
		<form id="feedback-form" action="https://leavittmd.zendesk.com/requests/embedded/create/" method="post">
		    <fieldset class="body">

		      <label for="subject">Subject<abbr title="Required">*</abbr></label><input id="subject" maxlength="150" name="subject" placeholder="Subject about which you are inquiring" required="required" title="Please fill out this field." type="text"><div class="validation error" id="subject_errors">&nbsp;</div>
		      <label for="description">Message<abbr title="Required">*</abbr></label><textarea id="description" name="description" placeholder="Fill in the details here. Please try to be as specific as possible." required="required" rows="6" title="Please fill out this field."></textarea><div class="validation error" id="description_errors">&nbsp;</div>
		      <div class="two_across">
		        <div>
		          <label for="name">Name<abbr title="Required">*</abbr></label><input id="name" name="name" required="required" title="Please fill out this field." type="text"><div class="validation error" id="name_errors">&nbsp;</div>
		        </div>
		        <div><label for="email">Your email address<abbr title="Required">*</abbr></label><input data-type="email" id="email" name="email" required="required" title="Please fill out this field." type="email"><div class="validation error" id="email_errors">&nbsp;</div></div>
		      </div>



		      <input id="locale_id" name="locale_id" type="hidden" value="1">
		      <input id="set_tags" name="set_tags" type="hidden" value="dropbox">
		      <input id="via_id" name="via_id" type="hidden" value="17">
		      <input id="client" name="client" type="hidden" value="Client: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.52 Safari/537.36">
		      <input id="submitted_from" name="submitted_from" type="hidden" value="https://leavitt.md/">
		      <input id="ticket_from_search" name="ticket_from_search" type="hidden" value="">

		      <div id="privacy_policy_link">
		        
		      </div>
    		</fieldset>
    		<input class="button" id="dropbox_submit" name="commit" type="submit" value="Submit">
    	</form>
	</div>

<?php include_once 'footer.php'; ?>