import "../scss/styles.scss";

// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";
function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}
const isValidName = (name) => {
  const namePattern = /^[A-Za-z]+$/;
  return namePattern.test(name);
};
document.addEventListener("DOMContentLoaded", () => {
  const formName = document.getElementById("name");
  const formEmail = document.getElementById("email");
  const validationTextName = document.getElementById("validation-text-name");
  const validationTextEmail = document.getElementById("validation-text-email");
  const nameRegex = /^[A-Za-z\s]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const subscribeContainer = document.getElementById(
    "subscribe-container-inner"
  );
  const popupContainer = document.querySelector(".popup-content");
  const form = document.getElementById("subscribe-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      if (name === "" && email !== "") {
        console.log({ error: "Name field can't be empty." });
        validationTextName.style.visibility = "visible";
        validationTextEmail.style.visibility = "hidden";
        validationTextName.innerText = "*Name field can't be empty.";
        return;
      } else if (name !== "" && email === "") {
        console.log({ error: "Email can't be empty." });
        validationTextName.style.visibility = "hidden";
        validationTextEmail.style.visibility = "visible";
        validationTextEmail.innerText = "*Email field can't be empty.";
        return;
      } else if (name === "" && email === "") {
        validationTextName.style.visibility = "visible";
        validationTextEmail.style.visibility = "visible";
        validationTextEmail.innerText = "*Email field can't be empty.";
        validationTextName.innerText = "*Name field can't be empty.";
      } else if (!nameRegex.test(name)) {
        console.log({ error: "Enter appropriate name." });
        validationTextName.style.visibility = "visible";
        validationTextEmail.style.visibility = "hidden";
        validationTextName.innerText = "*Enter appropriate name.";

        return;
      } else if (!emailRegex.test(email)) {
        console.log({ error: "Enter appropriate email." });
        validationTextName.style.visibility = "hidden";
        validationTextEmail.style.visibility = "visible";
        validationTextEmail.innerText = "*Enter appropriate email.";

        return;
      } else {
        const formData = {
          state: "success",
          data: { name, email, timestamp: Date.now() },
        };
        console.log(formData);
        validationTextEmail.innerText = "";
        validationTextName.innerText = "";
        popupContainer.classList.add("demo-toast-animate-in");
        setTimeout(() => {
          popupContainer.classList.add("demo-toast-animate-out");
          popupContainer.classList.remove("demo-toast-animate-in");
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
