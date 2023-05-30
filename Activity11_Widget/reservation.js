$(document).ready(function() {
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	// Move the focus to the first text box
	$("#arrival_date").focus();

	// Handler for the submit event of the form
	$("#reservation_form").submit(function(event) {
		var isValid = true;

		// Validate the requested arrival date
		var arrivalDate = $("#arrival_date").val().trim();
		if (arrivalDate === "") {
			$("#arrival_date").next().text("This field is required.");
			isValid = false;
		} else {
			$("#arrival_date").next().text("");
		}
		$("#arrival_date").val(arrivalDate);

		// Validate the number of nights
		var nights = $("#nights").val().trim();
		if (nights === "") {
			$("#nights").next().text("This field is required.");
			isValid = false;
		} else if (isNaN(nights)) {
			$("#nights").next().text("This field must be numeric.");
			isValid = false;
		} else {
			$("#nights").next().text("");
		}
		$("#nights").val(nights);

		// Validate the name entry
		var name = $("#name").val().trim();
		if (name === "") {
			$("#name").next().text("This field is required.");
			isValid = false;
		} else {
			$("#name").next().text("");
		}
		$("#name").val(name);

		// Validate the email entry with a regular expression
		var email = $("#email").val().trim();
		if (email === "") {
			$("#email").next().text("This field is required.");
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		$("#email").val(email);

		// Validate the phone number
		var phone = $("#phone").val().trim();
		if (phone === "") {
			$("#phone").next().text("This field is required.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);

		// Prevent the submission of the form if any entries are invalid
		if (!isValid) {
			event.preventDefault();
		}
	});

	$('.tabs ul li a').click(function() {
		var tabId = $(this).attr('data-tab');
		$('.tabs ul li a').removeClass('active');
		$('.tab-content').removeClass('active');
		$(this).addClass('active');
		$('#' + tabId).addClass('active');
	});

	var currentDate = new Date();
	var maxDate = new Date();
	maxDate.setDate(currentDate.getDate() + 90);

	$("#arrival_date").datepicker({
		dateFormat: "yy-mm-dd",
		minDate: currentDate,
		maxDate: maxDate,
		onSelect: function(selectedDate) {
			$(this).val(selectedDate);
		}
	});

	$("#policies").click(function() {
		$("#dialog").dialog({
			modal: true,
			width: 400,
			buttons: {
				Close: function() {
					$(this).dialog("close");
				}
			}
		});
	});
});
