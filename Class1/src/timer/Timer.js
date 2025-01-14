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

Timer.prototype.start = function () {
  var instance = this;
  var timerInterval = setInterval(function () {
    if (instance.seconds === 0) {
      clearInterval(timerInterval);
    }

    console.log(instance.seconds);
    instance.seconds -= 1;
  }, 1000);
};

export default Timer;
