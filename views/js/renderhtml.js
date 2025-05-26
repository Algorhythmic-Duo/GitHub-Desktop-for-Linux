// Ensure that 'main' is not redeclared
const main = document.getElementById("body-main");

fetch("../start.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then((html) => {
    main.innerHTML = html;
  })
  .catch((err) => {
    console.error("Failed to load the content: ", err);
  });
