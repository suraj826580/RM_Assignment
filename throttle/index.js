// example code
const button = document.getElementById("btn");
button.addEventListener(
  "click",
  throttler(() => {
    console.log(`Button Clicked`);
  }, 1000)
);

function throttler(callback, delay = 2000) {
  let isThrotlled = false;
  return () => {
    if (!isThrotlled) {
      isThrotlled = true;
      callback();
      setTimeout(() => {
        isThrotlled = false;
      }, delay);
    }
  };
}
