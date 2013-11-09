$(document).ready(function(){
  $('#main').hammer().on("tap", function(event) {
        console.log(this, event);
    });
});