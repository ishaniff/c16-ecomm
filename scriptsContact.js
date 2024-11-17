const form = document.querySelector("#formContact");
const formSubmit = document.querySelector("#submit");
const formName = document.querySelector("#name");
const formPhoneNumber = document.querySelector("#phonenumber");
const formEmail = document.querySelector("#email");
const formReason = document.querySelector("#reasonsList");
// I looked up these regex expressions formulas but everything else was done manually and independently.
const regExEmail =
  /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
const regExPhoneNumber =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const regExName = /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,20}$/;

formSubmit.addEventListener("click", function () {
  event.preventDefault();
  //   alert(formName.value);
  if (regExName.test(formName.value)) {
    console.log("true");
    validatedName = true;
  } else {
    alert("Please double check your name input.");
    validatedName = false;
  }
  if (regExPhoneNumber.test(formPhoneNumber.value)) {
    console.log("true");
    validatedPhoneNumber = true;
  } else {
    alert("Please fix your phone number.");
    validatedPhoneNumber = false;
  }
  if (regExEmail.test(formEmail.value)) {
    console.log("true");
    validatedEmail = true;
  } else {
    alert("Please fix your email address.");
    validatedEmail = false;
  }
  if (formReason.value != "") {
    console.log(true);
    validatedReason = true;
  } else {
    alert("Please select an option for contacting us.");
    validatedReason = false;
  }

  if (
    validatedEmail &&
    validatedName &&
    validatedPhoneNumber &&
    validatedReason
  ) {
    console.log("success");
    alert("Success we've recieved your form!");
  } else {
    console.log("invalid");
  }
});
