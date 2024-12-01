const heading = document.querySelector("#heading");
const toggleInput = document.querySelector(".toggle-input");
const questionContainer = document.querySelector("#question-container");
const questions = document.querySelectorAll(".questions");
const body = document.querySelector("body");
const scoreElement = document.querySelector("#score");

const correctAnswers = {
  q1: 2,
  q2: 1,
  q3: 1,
  q4: 1,
  q5: 1,
  q6: 2,
  q7: 1,
  q8: 1,
  q9: 1,
  q10: 2,
};

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

let score = 0;
let answered = 0;

for (let i = 0; i < questions.length; i++) {
  const elementId = `q${i + 1}`;
  const listItems = document.querySelectorAll(`#${elementId} li`);
  const uls = document.querySelectorAll(`#${elementId} ul`);
  const element = document.getElementById(elementId);

  if (element) {
    uls.forEach((ul) => {
      ul.style.listStyle = "none";
    });

    element.style.color = colors[elementId];

    listItems.forEach((li, index) => {
      li.innerHTML = `<input type="radio" name="${elementId}" value="${
        index + 1
      }">${li.textContent}`;
      li.style.display = "inline-block";
      li.style.padding = "5px";

      let input = li.querySelector('input[type="radio"]');

      input.addEventListener("change", () => {
        let inputs = document.querySelectorAll(
          `#${elementId} li input[type="radio"]`
        );

        inputs.forEach((radio) => {
          radio.disabled = true;
        });

        const selectedAnswer = parseInt(input.value);

        if (selectedAnswer === correctAnswers[elementId]) {
          li.style.backgroundColor = "green";
          score++;
        } else {
          li.style.backgroundColor = "red";
        }
        answered++;
      });
    });
  }
}

scoreElement.addEventListener("click", () => {
  scoreElement.textContent = `Score: ${score} out of ${answered}`;
});

toggleInput.addEventListener("change", () => {
  if (toggleInput.checked) {
    body.style.backgroundColor = "black";
    heading.style.backgroundColor = "#564302";
    heading.style.color = "yellow";
  } else {
    body.style.backgroundColor = "white";
    heading.style.backgroundColor = "yellow";
    heading.style.color = "#564302";
  }
});

