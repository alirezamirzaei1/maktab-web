// smooth scroll
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("#flesh-top-page").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    // hide and show navbar while scrolling
    var a = window.pageYOffset;
    var bottomHeader = $('#jumbotron-parent').offset().top + $('#jumbotron-parent').height();
    document.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > bottomHeader) {
            document.getElementById('navbar').style.top = '-1000px';
        } else {
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "0";
                }
                prevScrollpos = currentScrollPos;
            }
        }
    });

    // Modal for image
    $('#afarin').on({
        'click': function () {
            $('#org-image-one').show();
        }
    });
    $('#afarin-two').on({
        'click': function () {
            $('#org-image-two').show();
        }
    });
    $('#afarin-three').on({
        'click': function () {
            $('#org-image-three').show();
        }
    });
});