
  // Function to make the AJAX request
  function makeRequest() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the API endpoint URL
    var url = 'https://jobs.github.com/positions.json?description=programming';

    // Configure the AJAX request
    xhr.open('GET', url, true);

    // Set the callback function to handle the AJAX response
    xhr.onload = function () {
      // Check if the request was successful (HTTP status code 200)
      if (xhr.status === 200) {
        // Parse the response JSON
        var response = JSON.parse(xhr.responseText);

        // Build the HTML content
        var content = '<h3>Programming Job Listings:</h3>';

        if (response.length > 0) {
          content += '<ul>';
          response.forEach(function (job) {
            content += '<li>';
            content += '<h4>' + job.title + '</h4>';
            content += '<p>Company: ' + job.company + '</p>';
            content += '<p>Location: ' + job.location + '</p>';
            content += '</li>';
          });
          content += '</ul>';
        } else {
          content += '<p>No job listings found.</p>';
        }

        // Get the target element to display the content
        var targetElement = document.getElementById('ajax-content');

        // Set the content of the target element
        targetElement.innerHTML = content;
      }
    };

    // Send the AJAX request
    xhr.send();
  }

  // Call the makeRequest function when the document is fully loaded
  document.addEventListener('DOMContentLoaded', makeRequest);

