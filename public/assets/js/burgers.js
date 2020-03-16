$(document).ready(function() {
    //  Add burger Submit button event handler
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        const newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: false
        }
        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

    //  Devour button event handler
    $(".devourBtn").on("click", async function(event) {
        event.preventDefault();
        const id = $(this).data("id");  // Get the burger id from the value of data-id attribute
        const newDevoured = {
            devoured: true              // Set the value of "devoured" column true
        }
        // Send the PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevoured
        }).then(function() {
            location.reload();
        });
    });

    // $(document).on("click", ".devourBtn", function(event) {

    // });
});