const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let paragraph = "";

// rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
//   paragraph += answer;
//   console.log(`answer: ${paragraph}`);

//   rl.close();
// });

// rl.question("What's an activity you like doing?", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
      paragraph += answer + ", ";
      // console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's an activity you like doing?", (answer) => {
      paragraph += "likes " +answer + ", ";
      // console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
      paragraph += "their favorite meal of the day is " + answer + ", ";
      // console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What's your favourite thing to eat for that meal?", (answer) => {
      paragraph += "their favorite thing to eat is " + answer + ", ";
      // console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    rl.question("Which sport is your absolute favourite?", (answer) => {
      paragraph += "their favorite sport is " + answer + ", ";
      // console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question6 = () => {
  return new Promise((resolve, reject) => {
    rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
      paragraph += "their superpower is " + answer + ".";
      // console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  await question5()
  await question6()
  console.log(paragraph);
  rl.close()
}

main()

