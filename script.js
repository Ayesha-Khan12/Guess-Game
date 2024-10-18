const secretNumber = 4;

    function guessNumber() {
      const userGuess = parseInt(document.getElementById('userGuess').value);

      if (userGuess === secretNumber) {
        swal("Bingo!", "Correct answer", "success");
      } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
        swal("Close Enough!", "You're close to the correct answer", "info");
      } else if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
        swal("Invalid Guess!", "Please enter a number between 1 and 10.", "warning");
      } else {
        swal("Wrong Guess!", "Try again.", "error");
      }
    }