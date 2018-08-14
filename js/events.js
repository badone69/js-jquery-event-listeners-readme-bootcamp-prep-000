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
  $('form').on('keydown', function(key){
    if (key.which == 71){
      alert('G was pressed');
    }
  })
  
  
  
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();

});
