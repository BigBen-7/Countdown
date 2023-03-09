const countdown = () => {
  const countDate = new Date("march 18, 2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //How does the time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //Calculate the time
  const textDay = Math.floor(gap / day); //math.floor pushes a number to a whole one
  const textHour = Math.floor((gap % day) / hour); // % gives the remainder of a number
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;

  //   console.log(gap);
};

setInterval(countdown, 1000);

// function countdown() {
//   const countDate = new Date("march 18, 2023 00:00:00").getTime();
//   const now = new Date().getTime();
//   const gap = countDate - now;

//   //How does the time work?
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   //Calculate the time
//   const textDay = Math.floor(gap / day); //math.floor pushes a number to a whole one
//   const textHour = Math.floor((gap % day) / hour); // % gives the remainder of a number
//   const textMinute = Math.floor((gap % hour) / minute);
//   const textSecond = Math.floor((gap % minute) / second);

//   // Set the text of the countdown elements
//   document.querySelector(".day").innerText = textDay;
//   document.querySelector(".hour").innerText = textHour;
//   document.querySelector(".minute").innerText = textMinute;
//   document.querySelector(".second").innerText = textSecond;

//   // Check if the countdown has reached zero
//   if (gap <= 0) {
//     // Set the text of the message element
//     document.querySelector(".message").innerText = "Time's up!";
//     // Stop the countdown
//     clearInterval(countdownInterval);
//   }
// }

// // Call the countdown function every second
// const countdownInterval = setInterval(countdown, 1000);
