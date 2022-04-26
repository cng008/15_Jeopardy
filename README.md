# It’s Jeopardy!

## **Live Website**

### 👉[Click here to open website](https://cng008.github.io/15_Jeopardy/)

---

## **Purpose and Features**

- An interactive version of Jeopardy for study purposes.

### **Overview**

Jeopardy! is one of the longest-running game shows in American history. It has been running for 36 years, and contestants have earned millions of dollars since it first aired. Ken Jennings alone won 2.5 million dollars on his historic 74 game hot streak. For trivia nerds out there, it is possibly the best game show ever created.

---

[<img src="jeopardy.gif" width="700"/>](jeopardy.gif)

### **Features**

- The game board is 6 categories across, 5 question down, displayed in a table. Above this should be a header row with the name of each category.
- At the start of the game, randomly pick 6 categories from the [jService API](http://jservice.io/). For each category, randomly select 5 questions for that category.
- Initially, the board should show with ? on each spot on the board (on the real TV show, it shows dollar amount, but we won’t implement this).
- When the user clicks on a clue ?, it should replace that with the question text.
- When the user clicks on a visible question on the board, it should change to the answer (if they click on a visible answer, nothing should happen)
- When the user clicks the “Restart” button at the bottom of the page, it should load new categories and questions.

---

## **API**

This application was created using data from the <ins>**[jService API](http://jservice.io/)**</ins>. All card facts are sourced from the API's database.

---

## **Technologies**

This project was made using the following technologies:

- [Javascript](https://www.javascript.com)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Axios](https://axios-http.com/docs/intro)
- [VSCode](https://code.visualstudio.com/docs)
