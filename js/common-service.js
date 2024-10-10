// Function to load external HTML content
function loadHTML(selector, file) {
  fetch(file)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Failed to load the file: " + file);
      }
    })
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading the file:", error);
    });
}

// Load header and footer
loadHTML("head", "head.html");
loadHTML("header", "service-header.html");
loadHTML("footer", "footer.html");
