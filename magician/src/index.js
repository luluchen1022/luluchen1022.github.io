const today = new Date();
const andyThirtyBirthay = new Date("2024-4-23");
let countDownTime = andyThirtyBirthay - today;

function countDownTimer() {
  setInterval(() => {
    countDownTime = countDownTime - 1000;
    const second = 1000;
    const minute = second * 60; // 6000
    const hour = minute * 60; // 36000
    const day = hour * 24; // 864000

    const days = Math.floor(countDownTime / day);
    const hours = Math.floor((countDownTime - days * day) / hour);
    const minutes = Math.floor(
      (countDownTime - (days * day + hours * hour)) / minute
    );
    const seconds = Math.floor(
      (countDownTime - (days * day + hours * hour + minutes * minute)) / second
    );
    document.querySelector(".count_down_timer").innerHTML =
      days + "天" + hours + ":" + minutes + ":" + seconds;
  }, 1000);
}

countDownTimer();
