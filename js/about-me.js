$ (function () {
    $(".message").hide();
    $(".read-my-cv").on({
        click: function () {
            $(".message").fadeIn(500);
        }
    })

    $(".remove-message").on({
        click: function () {
            $(".message").hide();
        }
    })
})

