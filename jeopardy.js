// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let categories = [];

/** Get NUM_CATEGORIES random category from API. */
async function getCategoryIds() {
  const res = await axios.get(`https://jservice.io/api/categories?count=100`);
  const catIds = res.data.map(result => result.id);
  return _.sampleSize(catIds, 6); //Returns an array of 6 randomly picked categories
}

/** Returns object with data about a category: */
async function getCategory(catId) {
  const res = await axios.get(`https://jservice.io/api/category?id=${catId}`);
  let allClues = res.data.clues;
  let randomClues = _.sampleSize(allClues, 5); //randomly selects 5 questions for category
  let clues = randomClues.map(clue => ({
    question: clue.question,
    answer: clue.answer,
    showing: null
  }));
  return { title: res.data.title, clues };
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */
async function fillTable() {
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */
function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */
function showLoadingView() {
}

/** Remove the loading spinner and update the button used to fetch data. */
function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */
async function setupAndStart() {
}

/** TODO: On click of start / restart button, set up game. */

/** TODO: On page load, add event handler for clicking clues */