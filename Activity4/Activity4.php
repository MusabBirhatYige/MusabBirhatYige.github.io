<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="Activity4.css">
	<title>Registration Form</title>
</head>
<body>

	<h1>Registration Form</h1>

	<form method="post" action="Activity4-preview.php">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name" required><br><br>

		<label for="username">Username:</label>
		<input type="text" id="username" name="username" required><br><br>

		<label for="password">Password:</label>
		<input type="password" id="password" name="password" required><br><br>

		<label for="address">Address:</label>
		<input type="text" id="address" name="address" required><br><br>

		<label for="country">Country:</label>
		<select id="country" name="country" required>
			<option value="">(please select a country)</option>
			<option value="USA">USA</option>
			<option value="Canada">Canada</option>
			<option value="France">France</option>
			<option value="Germany">Germany</option>
			<option value="Japan">Japan</option>
		</select><br><br>

		<label for="zip">ZIP code:</label>
		<input type="text" id="zip" name="zip" required><br><br>

		<label for="email">Email:</label>
		<input type="email" id="email" name="email" required><br><br>

		<label for="gender">Gender:</label><br>
		<input type="radio" id="male" name="gender" value="male" required>
		<label for="male">Male</label>
		<input type="radio" id="female" name="gender" value="female" required>
		<label for="female">Female</label><br><br>

		<label for="language">Language:</label>
		<input type="checkbox" id="english" name="language[]" value="English">
		<label for="english">English</label>
		<input type="checkbox" id="french" name="language[]" value="French">
		<label for="french">French</label>
		<input type="checkbox" id="german" name="language[]" value="German">
		<label for="german">German</label><br><br>

		<label for="about">About:</label><br>
		<textarea id="about" name="about" rows="5" cols="40"></textarea><br><br>

		<input type="submit" value="Submit">
	</form>

	<?php
		// display form data on submission
		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			echo "<h2>Form Data:</h2>";
			echo "Name: " . $name . "<br>";
			echo "Username: " . $username . "<br>";
			echo "Password: " . $password . "<br>";
			echo "Address: " . $address . "<br>";
			echo "Country: " . $country . "<br>";
			echo "ZIP code: " . $zip . "<br>";
			echo "Email: " . $email . "<br>";
			echo "Gender: " . $gender . "<br>";
			echo "Language(s): ";
			foreach ($language as $lang) {
			echo $lang . " ";
			}
			echo "<br>";
			echo "About: " . $about . "<br>";
			}
			?>
			
			</body>
			</html>