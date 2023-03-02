// // As you complete each challenge, RUN THE CODE to ensure it works. You can do this by
// // running `node <filepath>`. If you are in this directory, you'd run `node for.js`.
  
// // Challenge 1
// // Use a for statement to log to the console all even numbers between 25 and 75.
for (i = 25; i < 76; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}


// // Challenge 2
// // Use a for statement to log to the console a complete sentence stating the weather using the Array below:
var weather_options = ["sunny", "snowy", "freezing", "partly cloudy", "drizzly"]
for (var w = 0; w < weather_options.length; w++) {
  console.log(`I love it when it's ${weather_options[w]} out.`)
}

// // Challenge 3
// // Use a for statement to log to the console only the words that are exactly 3 characters in length
var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]

for (var w = 0; w < words.length; w++) {
  if (words[w].length === 3) {
    console.log(words[w])
  }
}


// 📹 Record yourself live-coding and talking through any ONE of the challenges. 
  // The recording doesn't have to be the first time you are solving the problem. 
  // Use technical vocabulary and explain each part to demonstrate your understanding! 
  // Share the link to your video in your small group channel.

