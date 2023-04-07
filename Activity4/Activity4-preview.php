<!DOCTYPE html>
<html>
<head>
	<title>Membership Form - Preview</title>
</head>
<body>

	<h1> Preview</h1>

	<?php
		// check if our data is received
		// check if form was submitted and data was received
		if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["name"], $_POST["username"], $_POST["password"], $_POST["address"], $_POST["country"], $_POST["zip"], $_POST["email"], $_POST["gender"], $_POST["language"], $_POST["about"])) {
			$name = checkEmpty("Name", $_POST["name"]);
			$username = checkEmpty("Username", $_POST["username"]);
			$password = checkEmpty("Password", $_POST["password"]);
			$address = checkEmpty("Address", $_POST["address"]);
			$country = checkEmpty("Country", $_POST["country"]);
			$zip = checkEmpty("ZIP", $_POST["zip"]);
			$email = checkEmpty("Email", $_POST["email"]);
			$gender = checkEmpty("Gender", $_POST["gender"]);
			$language = checkEmptyLanguages("Language", $_POST["language"]);			
			$about = checkEmpty("About", $_POST["about"]);

			// display form data
			
			echo  $name . "<br>";
			echo  $username . "<br>";
			echo  $password . "<br>";
			echo  $address . "<br>";
			echo  $country . "<br>";
			echo  $zip . "<br>";
			echo  $email . "<br>";
			echo  $gender . "<br>";
			echo  $language . "<br>";
			echo  $about . "<br>";
		} else {
			echo "<p>No form data received.</p>";
		}

		function checkEmpty($fieldName, $value) {
			if (empty($value)) {
				return "$fieldName: Not provided";
			} else {
				return "$value";
			}
		}

		function checkEmptyLanguages($fieldName, $values) {
			if (empty($values)) {
				return "$fieldName: Not provided";
			} else {
				return  implode(", ", $values);
			}
		}
	?>

</body>
</html>
