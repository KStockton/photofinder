// var newPhoto = new Photo(, caption.value)

  // photoGallery.innerHTML += `<img src=${e.target.result} />`;


// function appendPhotos() {
//   imagesArr.forEach(function (photo) {
//     photoGallery.innerHTML += `<img src=${photo.file} />`
//   })
// }



// ---------------- Variables ------------
var addCard = document.querySelector('#add_btn');
//save it
// var letsSearch = document.querySelector('.search_icon')
var input = document.querySelector('.input');
var title = document.querySelector('#input_title')
var caption = document.querySelector('#input_caption')

var addMe = document.querySelector('.add_card')
var photoGallery = document.querySelector('.card_image');
var imagesArr = [];

console.log(imagesArr)
var reader = new FileReader();


// ------------ Event Listners --------------
// window.addEventListener('load', appendPhotos(imagesArr));
addCard.addEventListener('click', createElement);
addMe.addEventListener('dblclick', editCard)
// addMe.addEventListener('dblclick', )


// addMe.addEventListener('click', function(event) {
// if(event.target.classList.contains('.add_card')) {
//   eraser(event);
// }
// });

// -------------- Functions --------------------

function editCard() {
if (event.target.classList.contains('edit_this') || event.target.classList.contains('edit_captions')) {
   event.target.contentEditable = true;
  } 
}


function addPhoto(e) {
  var newPhoto = new Photo(Date.now(), title.value, e.target.result, caption.value, false);
  imagesArr.push(newPhoto);
  appendCard(newPhoto);
  newPhoto.saveToStorage(imagesArr);
  title.value = '';
  caption.value = '';
}

function createElement(e) {
   event.preventDefault();
  if (input.files[0]) {
    reader.readAsDataURL(input.files[0]); 
    reader.onload = addPhoto
  }
}







function appendCard(newPhoto) {
var cardPart =
`<article class="card_content" id="${newPhoto.id}" >
  <h2 class="card_title edit_this">${newPhoto.title}</h2>
  <section class="card_images">
  <img class="card_image" src=${newPhoto.file}>
  </section>
  <h4 class="card_caption edit_captions">${newPhoto.caption}</h4>
  <footer>
    <button class="delete_me"><img src="images/delete.svg" class="pic_icon"></button>
    <button class="favorite_me"><img src="images/favorite.svg" class="pic_icon"></button>
  </footer>
</article>`
  addMe.innerHTML = cardPart + addMe.innerHTML;
  };

window.onload = loaded
function loaded(){
   
  if(localStorage.getItem('cards') !== null){
    imagesArr = JSON.parse(localStorage.getItem('cards'));
    
    imagesArr = imagesArr.map(function(e){
     var newPhoto = new Photo(Date.now(), e.title, e.file, e.caption, e.favorite)
     
      appendCard(newPhoto)
      console.log('h4')
      return newPhoto
    });

  };
}
function getCardById(id) {
for (var i = 0; i < imagesArr.length; i++) {
  if (id == imagesArr[i].id) {
    return imagesArr[i];
  }
}
};
function eraser(event) {
   // event.preventDefault();
  var removeCard = event.target.parentElement.parentElement.parentElement.parentElement;
  var id = removeCard.id;
  var card = getCardById(id)
  var index = imagesArr.indexOf(card)
  imagesArr.splice(index, 1)
  removeCard.remove();
  card.deleteFromStorage(imagesArr)
}
