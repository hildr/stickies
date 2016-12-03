(function() { //IIFE

 // Create a new sticky

 var button = document.querySelector('.add');
 button.addEventListener('click', function (){
 	createSticky();
 });

 function createSticky() {
 	var value = document.querySelector('.note').value
  var key = 'sticky_'+localStorage.length;
  localStorage.setItem(key, value);
  addSticky(value);
 }

//Add items to the DOM

 function addSticky(value){
 		var stickies = document.querySelector('.stickies');
 		var sticky = document.createElement('li');
 		var span = document.createElement('span');
 		span.setAttribute('class', 'sticky');
 		span.innerHTML = value;
 		sticky.appendChild(span);
 		stickies.appendChild(sticky);
 }

 // Loop through items in local storage

 for (var i = 0; i < localStorage.length; i++){
 	var key = localStorage.key(i);
 		if(key.substring(0, 6) == 'sticky'){ //Check to see that our key starts with s t i c k y
 			var value = localStorage.getItem(key);
 			addSticky(value);
 		}
 }

// Clear storage

 // var clearButton = document.querySelector('.clear');
 // clearButton.addEventListener('click', function (){
 // 		clearStorage();
 // });

  var clearButton = document.querySelector('.clear');
 clearButton.addEventListener('click', clearStorage);

 function clearStorage(){
 	localStorage.clear();
 }

})();