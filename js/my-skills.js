$ (function () {
    $(".language-container:nth-of-type(1)").on({
        click: function () {
            $(this).removeClass(".html-logo-activate");
            $(this).addClass(".html-logo-activate");
        }
    })
})