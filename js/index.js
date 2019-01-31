// using this file is optional
// you can also load the code snippets in using your browser's console
//----------- clickable text ------------->
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

// ------------- input being shown in the console --------->
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.key);
});

// ------------- prevents the g button from doing naything in the input field --------->
const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});

// -------- bubbling -------->

let divs = document.querySelector('div');

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
}

//-------------- capturing ----------->

divs = document.querySelector('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');

   for (let i = 0; i < divs.length; i++) {
     divs[i].addEventListener('click', capture, true);
   }
}
