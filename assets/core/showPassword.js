const eyes = document.querySelectorAll(".olho");
const passwordFields = document.querySelectorAll(".input-password");

const showPassword = (input) => {
  input.type = "text";
};
const hidePassword = (input) => {
  input.type = "password";
};

const eyeClick = (index) => {
  const input = passwordFields[index];
  const inputIsPassword = input.type === "password";

  if (inputIsPassword) {
    showPassword(input);
  } else {
    hidePassword(input);
  }
};

eyes.forEach((eye, index) => {
  eye.onclick = () => {
    eyeClick(index);
  };
});
