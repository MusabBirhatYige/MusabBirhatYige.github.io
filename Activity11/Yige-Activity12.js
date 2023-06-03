$(document).ready(function() {
    // Click event handler for the <a> elements in the sidebar
    $('aside a').click(function(e) {
        e.preventDefault(); // Prevent the default link behavior

        // Retrieve the title attribute from the clicked link
        var title = $(this).attr('title');

        // Build the name of the JSON file based on the title
        var jsonFileName = title + '.json';

        // Make an AJAX request to retrieve the JSON data
        $.ajax({
            url: 'json_files/'+title+'.json',
            dataType: 'json',
            success: function(data) {
                // Get the first speaker object from the JSON data
                var speaker = data.speakers[0];

                // Create HTML elements for the speaker data
                var html = '<h1>' + speaker.title + '</h1>';
                html += '<img src="' + speaker.image + '">';
                html += '<h2>' + speaker.month + '<br>' + speaker.speaker + '</h2>';
                html += '<p>' + speaker.text + '</p>';

                // Clear the contents of the main element
                $('main').empty();

                // Update the main element with the speaker data
                $('main').html(html);
            },
            error: function() {
                console.log('Error retrieving JSON data');
            }
        });
    });
});
