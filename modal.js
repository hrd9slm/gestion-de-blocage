/* *************  modal add *********** */
var modal = document.getElementById("modal-background");
var curs = document.getElementById("curs");
var spans = document.getElementsByClassName("close");
curs.onclick = function() {
    modal.style.display = "block";
  ;}
  Array.from(spans).forEach(function(span) {
    span.addEventListener('click', function() {
      modal.style.display = "none";
    });
  });
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
/* *************  modal update *********** */
var modal_update = document.getElementById("modal-background-update");
  var curs_update = document.getElementById("curs-update");
  var spans = document.getElementsByClassName("close");


  curs_update.onclick = function() {
      modal_update.style.display = "block";
    ;}

    Array.from(spans).forEach(function(span) {
      span.addEventListener('click', function() {
        modal_update.style.display = "none";
      });
    });

    window.onclick = function(event) {
      if (event.target == modal_update) {
         modal_update.style.display = "none";
      }
    }

/* *************  modal blockage *********** */
var modal_blockage = document.getElementById("modal-background-blockage");
var curs_blockage = document.getElementById("curs-blockage");
var spans = document.getElementsByClassName("close");

curs_blockage.onclick = function() {
modal_blockage.style.display = "block";
;}

Array.from(spans).forEach(function(span) {
span.addEventListener('click', function() {
  modal_blockage.style.display = "none";
});
});

window.onclick = function(event) {
if (event.target == modal_blockage) {
   modal_blockage.style.display = "none";
}
}