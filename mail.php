<?php

if (isset($_POST['subject']) || isset($_POST['description']) || isset($_POST['name']) || isset($_POST['email'])) {
	try {
		$from = $_POST['email'];
		$to = 'support.31856.b298b37115758223@helpscout.net';
		$subject = $_POST['subject'];
		$description = $_POST['description'];
		$headers = 'From: ' . $fromp;
		// mail($to, $subject, $description, $headers);
		// mail($from, $subject, $description, $headers);
		header("Location: contact.php?success=1");
	} catch (Exception $e) {
	    header("Location: contact.php?success=0");
	}
}

header("Location: contact.php?success=0");


?>