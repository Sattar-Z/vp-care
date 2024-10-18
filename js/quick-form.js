(function () {
  emailjs.init("ULwylaTQ35dPSIHp0"); // Initialize EmailJS with your Public Key
})();

$(document).ready(function () {
  "use strict";

  $(".quick-form").submit(function (e) {
    e.preventDefault();

    // Clear any previous messages or errors
    $(".loading").html("").hide();
    var email = $(".email");

    if (email.val() == "") {
      email.closest(".form-control").addClass("error");
      email.focus();
      return false;
    } else {
      email.closest(".form-control").removeClass("error").addClass("success");
    }

    // Set the loading text or spinner
    $(".loading")
      .html(
        '<img src="images/Ellipsis@1x-4.2s-200px-200px.svg" alt="Loading..." />'
      )
      .fadeIn("slow");

    // Create a template params object to pass data to EmailJS
    var templateParams = {
      email: email.val(),
    };

    // Send the email using EmailJS
    emailjs.send("service_bj3m2fl", "template_tgnnl79", templateParams).then(
      function (response) {
        // On success
        $(".form-control").removeClass("success");
        $(".loading")
          .html('<font color="#48af4b">Mail sent successfully.</font>')
          .delay(3000)
          .fadeOut("slow");
        document.quickform.reset(); // Reset the form
      },
      function (error) {
        // On error
        $(".loading")
          .html('<font color="#ff5607">Mail not sent. Please try again.</font>')
          .delay(3000)
          .fadeOut("slow");
      }
    );

    return false; // Prevent form submission
  });

  // Reset button handler
  $("#reset").on("click", function () {
    $(".form-control").removeClass("success").removeClass("error");
  });
});
