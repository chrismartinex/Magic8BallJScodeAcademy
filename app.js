//creating a Magic Eight Ball with JS, throught CodeAcademy, using control flow.

//A user's able to input a question, then the program will output a random fortune.*/


let userName = 'Chris';
userName ? console.log(`Hello ${userName}!`):console.log('Hello!');
//user can ask question from the EightBall
let userQuestion = 'how smart am I';
 console.log(`${userName} asked... ${userQuestion} ?`);
 //create variable and assign to randomnumber 0 to 7
 let randomNumber = Math.floor(Math.random() * 8);
 //additional variable leave empty
 let eightBall = '';
 //create a switch statement with 8 possible outcomes
 switch (randomNumber){
   case 0:
   eightBall = 'It is certain';
   break;
   case 1:
   eightBall = 'It is decidedly so';
   break;
   case 2:
   eightBall = 'Reply hazy try again';
   break;
   case 3:
   eightBall = 'Cannot predict now';
   break;
   case 4:
   eightBall = 'Do not count on it';
   break;
   case 5:
   eightBall = 'My sources say no';
   break;
   case 6:
   eightBall = 'Outlook not so good';
   break;
   case 7:
   eightBall = 'Signs point to yes';
   break;
   default:
   console.log('You\'re unfortunate!');
   break;
 }
 console.log(`The Magic Eight Ball\'s answer is... ${eightBall}`);
