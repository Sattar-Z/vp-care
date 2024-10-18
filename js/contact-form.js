(function () {
  emailjs.init("ULwylaTQ35dPSIHp0"); // Initialize EmailJS with your Public Key
})();

$(document).ready(function () {
  "use strict";

  // Submit the contact form via EmailJS
  $(".contact-form").submit(function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Clear previous messages and errors
    $(".loading").html("").hide();
    var subject = $(".subject");
    var name = $(".name");
    var email = $(".email");
    var message = $(".message");

    // Basic validation
    if (name.val() == "") {
      name.addClass("error");
      name.focus();
      return false;
    } else {
      name.removeClass("error").addClass("success");
    }
    if (email.val() == "") {
      email.addClass("error");
      email.focus();
      return false;
    } else {
      email.removeClass("error").addClass("success");
    }
    if (message.val() == "") {
      message.addClass("error");
      message.focus();
      return false;
    } else {
      message.removeClass("error").addClass("success");
    }

    // Set loading text or spinner
    $(".loading")
      .html(
        '<img src="images/Ellipsis@1x-4.2s-200px-200px.svg" alt="Loading..." />'
      )
      .fadeIn("slow");

    // Prepare data for EmailJS
    var templateParams = {
      subject: subject.val(),
      name: name.val(),
      email: email.val(),
      message: message.val(),
    };

    // Send the email using EmailJS
    emailjs.send("service_q7jvybj", "template_65iguhw", templateParams).then(
      function (response) {
        // On success
        $(".form-control").removeClass("success");
        $(".loading")
          .html('<font color="#48af4b">Mail sent successfully.</font>')
          .delay(3000)
          .fadeOut("slow");
        document.contactform.reset(); // Reset the form
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

  // Reset button handler (if you have a reset button)
  $("#reset").on("click", function () {
    $(".form-control").removeClass("success").removeClass("error");
  });
});
