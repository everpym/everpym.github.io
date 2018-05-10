// Get the modal

function ff(){
var img = document.getElementById('login');
var modal = document.getElementById('myModal');
$('#login').on('click',function(){
  img = document.getElementById('login');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#menu').on('click',function(){
  img = document.getElementById('menu');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#au').on('click',function(){
  var img = document.getElementById('au');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#ac').on('click',function(){
  var img = document.getElementById('ac');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#ap').on('click',function(){
  var img = document.getElementById('ap');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#cmc').on('click',function(){
  var img = document.getElementById('cmc');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#ru').on('click',function(){
  var img = document.getElementById('ru');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#rc').on('click',function(){
  var img = document.getElementById('rc');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#rp').on('click',function(){
  var img = document.getElementById('rp');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#rb').on('click',function(){
  var img = document.getElementById('rb');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#enm').on('click',function(){
  var img = document.getElementById('enm');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#smsI').on('click',function(){
  var img = document.getElementById('smsI');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
$('#fu').on('click',function(){
  var img = document.getElementById('fu');
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});
// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

}
