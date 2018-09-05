// HEADER ANIMATION
const headerAnimation = anime.timeline();

headerAnimation
  .add({
    targets: '.header__title',
    translateX: [ { value: -780 }, { value: 0 } ],
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeOutSine',
    duration: 1500
  })
  .add({
    targets: '.header__subtitle',
    translateX: [ { value: 780 }, { value: 0 }],
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeOutSine',
    duration: 1500,
    offset: 1250
  })
  .add({
    targets: '.header__subtitle--alt',
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeInQuart',
    duration: 3000,
    offset: 2000

  })
  .add({
    targets: '.header__hr',
    translateY: [ { value: 800 }, { value: 0 } ],
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeOutSine',
    duration: 2000,
    offset: 2000
  })
  .add({
    targets: '.header__social',
    opacity: [{value: 0}, {value: 100}],
    easing: 'easeInOutSine',
    duration: 3000,
    offset: 3200
  })
  .add({
    targets: '.header__subtitle--alt',
    color: [
      {value: '#2c3e50'}, // Or #FFFFFF
      {value: '#ccae62'},
      {value: '#2d98da'},
      {value: '#95afc0'}
    ],
    easing: 'linear',
    direction: 'alternate',
    duration: 3000,
    offset: 4000

  })


// Initialize Firebase
const config = {
  apiKey: "AIzaSyDWwZckwn5FEiSu5COZiwRSJdIENBACFaI",
  authDomain: "afolabi-aiyeloja.firebaseapp.com",
  databaseURL: "https://afolabi-aiyeloja.firebaseio.com",
  projectId: "afolabi-aiyeloja",
  storageBucket: "afolabi-aiyeloja.appspot.com",
  messagingSenderId: "255631005341"
};
firebase.initializeApp(config);

// Reference messge collection
const messageRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Get values from form
function getInputVal(id){
  return document.getElementById(id).value;
}

// Submit form
function submitForm(e){
  e.preventDefault(); 
  
  // Save values as constants
  const name = getInputVal('nameForm');
  const email = getInputVal('emailForm');
  const message = getInputVal('messageForm');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';
 

  //Hide Alert
  const alertAnimation = anime({
    targets: '.alert',
    opacity: [{value: 100}, {value: 0}],
    duration: 2000,
    easing: 'easeOutSine' 
  });

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3005)

  // Reset Form
  document.getElementById('contactForm').reset();
}


// Save message to firebase database
function saveMessage(name, email, message){
  const newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}

 



 