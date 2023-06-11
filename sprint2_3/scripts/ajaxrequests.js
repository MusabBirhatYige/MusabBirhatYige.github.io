
  // Function to make the AJAX request
  function makeRequest() {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Define the API endpoint URL
    var url = 'https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=6220744d&app_key=d5fee721c4b6875ca4d44727bd21ab4f&results_per_page=10&what=programming';

    // Configure the AJAX request
    xhr.open('GET', url, true);

    // Set the callback function to handle the AJAX response
    xhr.onload = function () {
      // Check if the request was successful (HTTP status code 200)
      if (xhr.status === 200) {
        // Parse the response JSON
        var response = JSON.parse(xhr.responseText);

        // Build the HTML content
        var content = '<h3>Available programmin jobs</h3>';

        if (response.results.length > 0) {
          content += '<ul>';
          response.results.forEach(function (job) {
            content += '<li>';
            content += '<h4>' + job.title + '</h4>';
            content += '<p>Company: ' + job.company.display_name + '</p>';
            content += '<p>Location: ' + job.location.display_name + '</p>';
            content += '</li>';
          });
          content += '</ul> Jobs are fetched from ADZUNA API';
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

