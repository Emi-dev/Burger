$(function() {
    //  Add burger Submit button event handler
    $(".create-form").on("submit", function(event) {
        console.log("submit!");
        event.preventDefault();
        const newBurger = {
            burgerName: $("#burgerName").val().trim(),
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
    //     console.log("devour!");
    // });

    // $(document).on("submit", ".create-form", function(event) {
    //     console.log("submit!");
    // });
});