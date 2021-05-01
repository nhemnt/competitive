// what is denouncing?
// what is throttling?
// difference b/w debouncing and throttling?


// Debouncing forces a funtion to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.


function debounce (func, limit, immediate) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    const context = this;
    const args = arguments;
    timeout = setTimeout(() => {
      // console.log(immediate);
      func.apply(context, args);
    }, limit);
  }
}

function thorttle(func, limit) {
  let inThrottle;
  return function () {
    if (!inThrottle) {
      inThrottle = true;
      const args = arguments;
      func.apply(this, args);
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  }
}

const highlyRepeatedFunc = (name, age) => { 
  console.log(`Hi, my name is ${name} and I'm ${age} yrs old.`);
}


const debounceFunction =  debounce(highlyRepeatedFunc, 3000);

for (let i = 0; i < 20; i++){
  setTimeout(() => {
    highlyRepeatedFunc('hemant', 12);
  }, i *1000);
}