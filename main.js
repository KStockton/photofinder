// var newPhoto = new Photo(, caption.value)

  // photoGallery.innerHTML += `<img src=${e.target.result} />`;


// function appendPhotos() {
//   imagesArr.forEach(function (photo) {
//     photoGallery.innerHTML += `<img src=${photo.file} />`
//   })
// }



// ---------------- Variables ------------
var addCard = document.querySelector('.add_btn');
//save it
var letsSearch = document.querySelector('.search_icon')
var input = document.querySelector('.input');
var title = document.querySelector('.input_title')
var caption = document.querySelector('.input_caption')
var like = document.querySelector('.favorite_me')
var trash = document.querySelector('.delete_me')
var addMe = document.querySelector('.add_card')
var photoGallery = document.querySelector('.card_image');
var imagesArr = JSON.parse(localStorage.getItem('newPhoto')) || [];
console.log(imagesArr)
var reader = new FileReader();


// ------------ Event Listners --------------
window.addEventListener('load', appendPhotos);
addCard.addEventListener('click', createElement);
  // trash.addEventListener('focusin', eraser);

// -------------- Functions --------------------
function createElement(e) {
   event.preventDefault();
  if (input.files[0]) {
    reader.readAsDataURL(input.files[0]); 
    reader.onload = addPhoto
  }
}

function addPhoto(e) {
  var newPhoto = new Photo(Date.now(), title.value, caption.value, e.target.result, false);
  imagesArr.push(newPhoto);
  newPhoto.saveToStorage(imagesArr);
  appendCard(newPhoto);
}


function appendPhotos(array) {
  imagesArr = []
  array.forEach(function(content) {
    newCard(content);
    var newPhoto = new Photo(content.id, content.title, content.caption, content.file, content.favorite);
    imagesArr.push(newPhoto);
  })
}

// function eraser(e) {
//   // event.preventDefault();
//   // var removeCard = event.target.parentElement.parentElement;
//   trash.parentNode.removeChild(trash);

// }


window.onload = function loaded(){
   
  if(localStorage.getItem('cards') !== null){
    imagesArr = JSON.parse(localStorage.getItem('cards'));
    
    imagesArr = imagesArr.map(function(e){
     return new Photo(e.id, e.title, e.caption, e.file, e.favorite)

    });

     var filtered = imagesArr.slice(-10);     
     filtered.forEach(function(e){

       appendCard(e);
     });
  };
};



function appendCard(newPhoto) {
var cardPart =
        `<article class="card_content" id="${newPhoto.id}" >
          <h2 class="card_title">${newPhoto.title}</h2>
          <section class="card_images">
          <img class="card_image" src=${newPhoto.file}>
          </section
          <h4 class="card_caption">${newPhoto.caption}</h4>
          <footer>
            <button class="delete_me"><img src="images/delete.svg" class="pic_icon"><button>
            <button class="favorite_me"><img src="images/favorite.svg" class="pic_icon"><button>
          </footer>
        </article>`
  addMe.innerHTML = cardPart + addMe.innerHTML;
  // addMe.insertAdjacentHTML('beforeend',cardPart)
  }