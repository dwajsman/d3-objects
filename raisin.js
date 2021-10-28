// Exercise
// In this exercise, you will write a function that identifies whether a supposedly chocolate chip cookie also has raisins in it. Your function, raisinAlarm, will receive a cookie which is an array of chocolate chips ("🍫"). However, there is a chance that there might be a pesky raisin in the array as well ("🍇"). Your function must search through the array to see whether or not a raisin is present.

// If your function detects a raisin, it should return "Raisin alert!". If no raisin is present, your function should return "All good!".




const raisinAlarm = function(cookie) {
  //FOR EACH AND TRY TO DETECT RAISINS
  let alert = "All good!";

  cookie.forEach(element => {
    // IF RAISIN RETURN "Raisin alert!"

    if (element === "🍇") {
      //console.log("hello");
      alert = "Raisin alert!";
    } 

  });

  return alert;

};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));




// Expected Output
// Raisin alert!
// Raisin alert!
// All good!
// Complete the function named raisinAlarm that will receive an array of strings and return the correct assessment of raisin presence.

// Stretch
// As a stretch exercise, see if you can make a new function that supports arrays of arrays. Your function should return an array of responses, instead of a single response. You can add this new function to your existing raisin.js file.

// Starter Code
// const raisinAlarmArray = function(cookies) {
//   // Put your solution here
// };

// console.log(raisinAlarmArray(
//   [
//     ["🍫", "🍫", "🍇", "🍫"],
//     ["🍫", "🍇", "🍫", "🍫", "🍇"],
//     ["🍫", "🍫", "🍫"]
//   ]
// ));
// Expected Output
// ["Raisin alert!", "Raisin alert!", "All good!"]
// Submit Your Work

// Each pair programming partner should submit their own gist.

// Browse to gist.github.com and create a new gist.
// Copy-and-paste your code into the form
// Name the gist and the file appropriately and click Create secret gist.
// Finally, mark this activity as completed (at the bottom of this page) and please copy/paste the entire browser URL for your gist (from gist.github.com) into the text field.