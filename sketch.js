var database; 
var nam, email, section, grade;
var q1, q2, q3; 
var submit; 
var answers; 

function setup() {
  createCanvas(900, 650);
  
  var config = {
    apiKey: "AIzaSyABLeZ7njk7wSGJMdqzG7sG37XfH4VHj8g",
    authDomain: "surveytobringachange.firebaseapp.com",
    databaseURL: "https://surveytobringachange.firebaseio.com",
    projectId: "surveytobringachange",
    storageBucket: "surveytobringachange.appspot.com",
    messagingSenderId: "95696759080",
    appId: "1:95696759080:web:2058d0802762121516481d"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  nam = createInput();
  nam.position(80, 95); 

  grade = createInput();
  grade.position(80, 125); 

  section = createInput();
  section.position(80, 155);

  email = createInput(); 
  email.position(80, 185);

  q1 = createInput();
  q1.position(5, 270);

  q2 = createInput();
  q2.position(5, 370);

  q3 = createInput(); 
  q3.position(5, 470); 

  submit = createButton("Submit");
  submit.position(5, 550); 
  submit.mousePressed(submitData); 

  answers = database.ref("answers"); 
}

function draw() {
  background(180);

  textSize(15); 
  text("INSTRUCTIONS : ", 5, 20);
  textSize(15);
  text("1. Please answer all the questions.", 5, 45); 
  text("2. Please mention your name, grade, your class section, and email id(if you have one) in their respective fields.", 5, 60);
  text("3. The answers for questions 1 and 2 should be either 'yes' or 'no'. ", 5, 75);

  text("Name :", 5, 110);
  text("Grade :", 5, 140);
  text("Section :", 5, 170);
  text("Email id :", 5, 200); 

  text("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor? (YES OR NO)", 5, 250);
  text("Q2. Would you be willing to donate a small amount of money each month for a such a program? (YES OR NO)", 5, 350);
  text("Q3. How much per month would you be willing to pay? The answer should be in rupees. (e.g. Rupees 50)", 5, 450);
}

function submitData(){
  var data = {
    name : nam.value(), 
    grade : grade.value(), 
    section : section.value(), 
    email : email.value(), 
    q1 : q1.value(), 
    q2 : q2.value(), 
    q3 : q3.value(), 
  }

  answers.push(data); 
}