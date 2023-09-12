# Rock, Paper, Scissors Game Project
## Introduction

The Rock, Paper, Scissors Game project is a fun and interactive web application built using HTML, CSS, and JavaScript. This project showcases the use of classes, switch statements, and try-catch-finally statements to create an engaging and error-tolerant user experience.

## Project Features
### 1. Game Logic and Class Implementation

In this project, we implemented the game logic within a JavaScript class called RPSGame. The class encapsulates the game's functionality, making the code organized and maintainable. Here's how we utilized classes:
```sh
class RPSGame {
    // ...
    // Game logic and methods encapsulated within the class
    // ...
}
```
By using classes, we can easily create multiple instances of the game if needed, making it extensible for future enhancements.

### 2. User Interface and Responsive Design

The user interface is created using HTML and styled with CSS. The game container is centered both horizontally and vertically on the screen, providing an excellent user experience on various devices and screen sizes.

```sh
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    width: 90%;
    max-width: 400px;
    // ...
}
```

### 3. User Interaction

Users can choose between "Rock," "Paper," and "Scissors" by clicking on the respective buttons. The user's choice triggers the game logic, and the result is displayed on the screen. This interaction is facilitated through event listeners attached to the buttons.
```sh
this.buttons.forEach(button => {
    button.addEventListener("click", () => this.play(button.id));
});
```

## 4. Game Logic with Switch Statements

The heart of the game logic is the determineWinner method, which decides the outcome based on the user's choice and the computer's randomly generated choice. We employ a switch statement to handle the different possible outcomes:
```sh
determineWinner(userChoice, computerChoice) {
    try{
        switch(userChoice){
            //...
        }
    } catch (error) {
        return "Error: " + error.message;
    } finally {
        console.log("Game over.");
    }
}
```