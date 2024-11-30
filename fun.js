<<<<<<< HEAD
const heading = document.querySelector("#heading");
const questionContainer = document.querySelectorAll("#question-container");
const body = document.querySelector("body");

const colors = {
  q1: "green",
  q2: "red",
  q3: "yellow",
  q4: "cyan",
  q5: "blue",
  q6: "magenta",
  q7: "orange",
  q8: "brown",
  q9: "purple",
  q10: "violet",
};

for (let i = 1; i <= questionContainer.length; i++) {
  let element = "q" + i;
  document.getElementById(element).style.color =
    colors[elementelement.innerHTML];
}
=======
const heading = document.querySelector('#heading');
>>>>>>> 2c0ad865ac9d36ba7c65f81ead5003e5ec3acfc3
