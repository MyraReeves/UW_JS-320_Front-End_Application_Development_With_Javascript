/* Perform the following tasks:
Examine the code and determine each script's behavior.
Refactor the code to use the ES6 class syntax.
Refactor the code to use arrow function(s).
Refactor the code to use let/const.
Refactor the code to avoid assigning this to a variable.
*/

function Timer(seconds) {
  this.seconds = seconds;
}

Timer.prototype.start = () => {
  // const instance = this;
  const timerInterval = setInterval(() => {
    if (this.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(this.seconds);
    this.seconds -= 1;
  }, 1000);
};

export default Timer;
