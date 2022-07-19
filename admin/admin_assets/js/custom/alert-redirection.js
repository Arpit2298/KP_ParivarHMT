function alertPageTransfor(pagename) {
    if (document.getElementById("content_page_hfRedirect").value == "1") {
        $('.confirm').click(function () {
            debugger;
            window.location.href = pagename;
        })
    }
}

function alertPageTransforFormPage(pagename) {
    if (document.getElementById("content_page_secound_content_hfRedirect").value == "1") {
        $('.confirm').click(function () {
            window.location.href = pagename;
        })
    }
}