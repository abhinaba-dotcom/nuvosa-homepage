import "../scss/styles.scss";

// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";
const form = document.getElementById("subscribe-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name === "") {
      console.log({ error: "Name field can't be empty." });
      return;
    } else if (email === "") {
      console.log({ error: "Email can't be empty." });
      return;
    }
    const formData = { state: "success", data: { name, email, timestamp: Date.now()}};
    console.log(formData);
  } catch (error) {
    console.error("Error:", error);
  }
});
