const heading = document.querySelector("#heading");
const questionContainer = document.querySelector("#question-container");
const questions = document.querySelectorAll(".questions");
const body = document.querySelector("body");

const colors = {
  q1: "#0f0d5c",
  q2: "#0f0d5c",
  q3: "#0f0d5c",
  q4: "#0f0d5c",
  q5: "#0f0d5c",
  q6: "#0f0d5c",
  q7: "#0f0d5c",
  q8: "#0f0d5c",
  q9: "#0f0d5c",
  q10: "#0f0d5c",
};

for (let i = 0; i < questions.length; i++) {
  const elementId = `q${i + 1}`;
  const element = document.getElementById(elementId);

  // Checking if the element exists
  if (element) {
    element.style.color = colors[elementId];
  }
}
