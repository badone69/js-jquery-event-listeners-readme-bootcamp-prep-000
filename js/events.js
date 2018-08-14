//define functions here

function getIt() {
  $('p').on('click',function(key) {
    alert("Hey!");
  } )
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
  
}

function pressIt() {
  
  
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();


});
