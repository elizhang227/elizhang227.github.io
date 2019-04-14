var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/anime.png') {
      myImage.setAttribute ('src','images/anime2.png');
    } 
    else {
      myImage.setAttribute ('src','images/anime.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'HELLO ' + myName + '?';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'HELLO ' + storedName + '?';
  }

  myButton.onclick = function() {
    setUserName();
  }