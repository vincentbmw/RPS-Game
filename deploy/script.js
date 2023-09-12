class RPSGame {
    constructor() {
        this.choices = ["rock", "paper", "scissors"];
        this.resultMessage = document.getElementById("result");
        this.buttons = document.querySelectorAll(".btn");

        this.buttons.forEach(button => {
            button.addEventListener("click", () => this.play(button.id));
        });
    }

    play(userChoice) {
        const computerChoice = this.getComputerChoice();
        const result = this.determineWinner(userChoice, computerChoice);

        this.displayResult(result, computerChoice);
    }

    getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * this.choices.length);
        return this.choices[randomIndex];
    }

    determineWinner(userChoice, computerChoice) {
        try {
            let result;
    
            switch (userChoice) {
                case "rock":
                    switch (computerChoice) {
                        case "rock":
                            result = "It's a tie!";
                            break;
                        case "paper":
                            result = "Computer wins!";
                            break;
                        case "scissors":
                            result = "You win!";
                            break;
                        default:
                            throw new Error("Invalid computer choice");
                    }
                    break;
    
                case "paper":
                    switch (computerChoice) {
                        case "rock":
                            result = "You win!";
                            break;
                        case "paper":
                            result = "It's a tie!";
                            break;
                        case "scissors":
                            result = "Computer wins!";
                            break;
                        default:
                            throw new Error("Invalid computer choice");
                    }
                    break;
    
                case "scissors":
                    switch (computerChoice) {
                        case "rock":
                            result = "Computer wins!";
                            break;
                        case "paper":
                            result = "You win!";
                            break;
                        case "scissors":
                            result = "It's a tie!";
                            break;
                        default:
                            throw new Error("Invalid computer choice");
                    }
                    break;
    
                default:
                    throw new Error("Invalid user choice");
            }
            return result;
        } catch (error) {
            return "Error: " + error.message;
        } finally {
            console.log("Game over.");
        }
    }

    displayResult(result, computerChoice) {
        this.resultMessage.textContent = `Computer chose ${computerChoice}. ${result}`;
    }
}

const game = new RPSGame();
