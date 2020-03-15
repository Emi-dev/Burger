$(document).ready(function() {
    $(".create-form").on("submit", async function(event) {
        event.preventDefault();
        const addReady = addToReadyBurger();
        location.reload();
    });

    $(".devourBtn").on("click", async function(event) {
        event.preventDefault();
        const id = $(this).data("id");

        const updateDevoured = await updateDevouredBurger(id);
        const deleteReady = await deleteFromReadyBurger(id);
        location.reload();
    });

    function addToReadyBurger() {
        const newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: false
        }

        return $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        });
    }

    function updateDevouredBurger(id) {
        return $.ajax("/api/burgers" + id, {
            type: "PUT"
        });
    }

    function deleteFromReadyBurger(id) {
        return $.ajax("/api/burgers" + id, {
            type: "DELETE"
        });
    }



    // $(document).on("click", ".devourBtn", function(event) {

    // });
});