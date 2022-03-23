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
}