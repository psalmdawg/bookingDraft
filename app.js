console.log('connected JS');

var numOfSeats = 50;

  for(i = 1; i <= numOfSeats; i++) {

    var seating = document.createElement("div");
    seating.className = "seat";
    seating.idName = i;
    var seatNumbers = document.createTextNode(i);
      seating.appendChild(seatNumbers)
    var element = document.getElementById("seat-container");
      element.appendChild(seating);

  }


  $(".seat").on("click", function() {
      $(this).toggleClass('back-red');
  });

  var seatArray =[];
  $('.seat').click(function() {
    var text = $(this).text();

    seatArray.push(text)
    var numOfSeats = seatArray.length;
  $('#seat-selection').html('Selected seats: ' + numOfSeats);
    console.log(text)
    console.log(event.target.id)

});
