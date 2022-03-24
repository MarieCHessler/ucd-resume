function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) { // If no value is entered, i.e. field is empty
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html( // If text has been entered a loader starts
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

    $.when(
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then(
        function(response) { // Response comes from getJSON method
            var userData = response; // Response is stored in userData
            $("#gh-user-data").html(userInformationHTML(userData)); // jQuery selector selects gh-user-data div and set HTML to results of userInformationHTML
        }, function(errorResponse) {
            if (errorResponse.status === 404) { // 404 is a not found error
                $("#gh-user-data").html(`<h2>No info found for user ${username}</h2>`); // Set gh-user-data div's HTML to error message
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(`<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        });
}