$(function() {
    //  Add burger Submit button event handler
    $(".create-form").on("submit", function(event) {
        console.log("submit!");
        event.preventDefault();
        const newBurger = {
            burgerName: $("#burgerName").val().trim(),
        }
        // Send the POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Made a new burger!");
            location.reload();
        });
    });

    //  Devour button event handler
    $(".devourBtn").on("click", async function(event) {
        event.preventDefault();
        // Get the burger id from the value of data-id attribute
        const id = $(this).data("id");  
        const newDevoured = {
            devoured: true  // Set the value of "devoured" column true
        }
        // Send the PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(function() {
            location.reload();
        });
    });

    // Delete button event handler
    $(".deleteBtn").on("click", function(event) {
        const id = $(this).data("id");
        // Send the DELETE request
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            location.reload();
        });
    });
});