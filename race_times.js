let earlyRunner = true;
let lateRunner = false;

let runnerAge = 16;

let raceNumber = Math.floor(Math.random() * 1000);

if (runnerAge >= 18 && earlyRunner === true) {
    raceNumber += 1000;
}

if (runnerAge >= 18 && earlyRunner === true) {
    console.log(`You will start the race at 9:30am. Here's your number: ${raceNumber}`);
} else if (runnerAge >= 18 && earlyRunner === false){
    console.log(`You will start the race at 11:00am. Here's your number: ${raceNumber}`);
}

if (runnerAge < 18) {
    console.log(`You will start the race at 12:30pm. Here's your number: ${raceNumber}`);
}
