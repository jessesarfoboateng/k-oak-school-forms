const forms = document.querySelectorAll(".form-step");
let currentFormIndex = 0;

document.getElementById("prevForm").addEventListener("click", showPrevForm);
document.getElementById("nextForm").addEventListener("click", showNextForm);

function showPrevForm() {
  if (currentFormIndex > 0) {
    forms[currentFormIndex].style.display = "none";
    currentFormIndex--;
    forms[currentFormIndex].style.display = "block";
  }
}

function showNextForm() {
  if (currentFormIndex < forms.length - 1) {
    forms[currentFormIndex].style.display = "none";
    currentFormIndex++;
    forms[currentFormIndex].style.display = "block";
  }
}
