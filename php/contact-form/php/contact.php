<?php

if(isset($_REQUEST["isvalid"])){

	$youremail = "example@example.com"; // Enter your email here!!
	$name = $_POST["username"];
	$email = $_POST["useremail"];
	$mailsubject = $_POST["usersubject"];
	$subject = $_POST["usersubject"];
	$usermessage = $_POST["usermessage"];
	$message =

"You have been contacted by $name with regards to $subject and the Message as follows:

$usermessage

...............................................

Contact details:

Email Address: $email";

	$headers = 'From:' . $email . "\r\n";
	mail($youremail, $mailsubject, $message, $headers);

	echo "success";

} else {

	echo "failed";

}