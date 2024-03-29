/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
function buildQuiz() {
// we'll need a place to store the HTML output
const output = [];

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
// ...add an HTML radio button
answers.push(
`<label>
<input type="radio" name="question${questionNumber}" value="${letter}">
${letter} :
${currentQuestion.answers[letter]}
</label>`
);
}

// add this question and its answers to the output
output.push(
`<div class="question"> ${currentQuestion.question} </div>
<div class="answers"> ${answers.join("")} </div>`
);
});

// finally combine our output list into one string of HTML and put it on the page
quizContainer.innerHTML = output.join("");
}

function showResults() {
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");
answerContainers.forEach(e => e.style.color = "black");

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach((currentQuestion, questionNumber) => {
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if (userAnswer === currentQuestion.correctAnswer) {
// add to the number of correct answers
numCorrect++;

// color the answers green
//answerContainers[questionNumber].style.color = "lightgreen";
} else {
// if answer is wrong or blank
// color the answers red
answerContainers[questionNumber].style.color = "red";
}
});

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


const myQuestions = [{
question: "1. Which of the following best describes the topological order? ", ///// Write the question inside double quotes
answers: {
a: " If a digraph has no directed cycle it does have a topological order otherwise it might or might not have a topological order ", ///// Write the option 1 inside double quotes
b: "A directed graph has a topological order if and only if it has no directed cycle", ///// Write the option 2 inside double quotes
c: "A directed graph has a topological order if and only if it has no directed cycle ", ///// Write the option 3 inside double quotes
d: "None of these ", ///// Write the option 4 inside double quotes
},
correctAnswer: "c" ///// Write the correct option inside double quotes
},

{
question: "2. Assume you use a digraph to schedule a set of tasks, that have precedence constraints. In such a graph, the tasks should be the ________________ and the constraints should be the ______________.",  ///// Write the question inside double quotes
answers: {
a: " vertices,bedges ",                  ///// Write the option 1 inside double quotes
b: "edges, vertices",                  ///// Write the option 2 inside double quotes
c: "vertices, vertices", ///// Write the option 3 inside double quotes
d: " edges, edges", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "3. Topological Sort is equivalent to which of the traversals in trees?",  ///// Write the question inside double quotes
answers: {
a: " Pre-order traversal ",                  ///// Write the option 1 inside double quotes
b: "Post-order traversal ",                  ///// Write the option 2 inside double quotes
c: " In-order traversal", ///// Write the option 3 inside double quotes
d: "None of these", ///// Write the option 4 inside double quotes
},
correctAnswer: "a"                ///// Write the correct option inside double quotes
},

{
question: "4. Topological sort of a Directed Acyclic graph is ________. ",  ///// Write the question inside double quotes
answers: {
a: "Always unique ",                  ///// Write the option 1 inside double quotes
b: " Always Not unique ",                  ///// Write the option 2 inside double quotes
c: "Sometimes unique and sometimes not unique", ///// Write the option 3 inside double quotes
d: "None of these ", ///// Write the option 4 inside double quotes

},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

{
question: "5. Time Complexity of Topological Sorting is _______. (V – number of vertices, E – number of edges)",  ///// Write the question inside double quotes
answers: {
a: "O(|E|)",                  ///// Write the option 1 inside double quotes
b: "O(|V|)",                  ///// Write the option 2 inside double quotes
c: "O(|V| + |E|)", ///// Write the option 3 inside double quotes
d: "None of these ", ///// Write the option 4 inside double quotes

},
correctAnswer: "c"                ///// Write the correct option inside double quotes
},

];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
