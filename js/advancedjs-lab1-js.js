// Step 2: Create a variable called tweets and assign it an empty array for now
let tweets = [];
// Step 4: Create a function 'tweeting' that grabs the value of what was typed in the textarea, then assigns that to the property 'tweet'
//Step 4a: That property 'tweet' happens belongs to an object that you create on - the - fly which has the following structure: { tweet: textarea.value }
//Step 4b: Then that whole object gets inserted into your tweets array
//Create a function 'display(tweets)' that accepts an argument that contains the array of tweets and displays the tweets stored in that array using the.map method
function myFunction() {
  let x = document.getElementById("myTextarea").value;
  document.getElementById("demo").innerHTML = x;
}
