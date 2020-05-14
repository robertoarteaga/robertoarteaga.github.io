$(document).ready(function() {
  var counter = 0;

  // Start the changing images
  setInterval(function() {
    if(counter == 5) { 
      counter = 0; 
    }

    changeImage(counter);
    counter++;
  }, 3000);

});

function changeImage(counter) {
  var images = [
    '<img src="frontend/img/Frodo2.png" style="height: 100px;width: 100px;"></img>',
    '<img src="frontend/img/Frodo3.png" style="height: 100px;width: 100px;"></img>',
    '<img src="frontend/img/Frodo4.png" style="height: 100px;width: 100px;"></img>',
    '<img src="frontend/img/Frodo5.png" style="height: 100px;width: 100px;"></img>',
    '<img src="frontend/img/Frodo1.png" style="height: 100px;width: 100px;"></img>'
  ];

  $(".loader .image").html(""+ images[counter] +"");
}
