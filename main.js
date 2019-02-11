// ---------------- Variables ------------
var addCard = document.querySelector('#add_btn');
var favoriteBtn = document.querySelector('.view_btn')
var favToggle = document.querySelector('.noFavorite')
var input = document.querySelector('.input');
var title = document.querySelector('#input_title')
var caption = document.querySelector('#input_caption')
var addMe = document.querySelector('.add_card')
var photoGallery = document.querySelector('.card_image');
var favoriteArray = []
// console.log(favoriteArray)
var imagesArr = JSON.parse(localStorage.getItem('cards')) || [];
var reader = new FileReader();
// var favoriteIcon = document.querySelector('favorite_me')

// ------------ Event Listners --------------
window.addEventListener('load', repopulateCards(imagesArr))
addCard.addEventListener('click', createElement);
addMe.addEventListener('dblclick', editCard); 

addMe.addEventListener('click', function(event) {
createFavorite(event)
  if (event.target.classList.contains('noFavorite')) {
  event.target.classList.add('theFavorite')
  event.target.classList.remove('noFavorite')
  } 
  else if(event.target.classList.contains('theFavorite')){
    event.target.classList.add('noFavorite')
    event.target.classList.remove('theFavorite')
  }
})

addMe.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete_me')) {
  eraser(event)
  } 

});

// -------------- Functions -------------------- //

function repopulateCards(array){
  imagesArr = [];
  array.forEach(e => {
    let photocard = new Photo(Date.now(), e.title, e.file, e.caption, e.favorite)
    imagesArr.push(photocard)
      appendCard(photocard)

  })
}
// window.onload = function loaded() {
//   if (localStorage.getItem('cards') !== null) {
//     imagesArr = JSON.parse(localStorage.getItem('cards'));
//     imagesArr = imagesArr.map(function(e) {
//       var newPhoto = new Photo(Date.now(), e.title, e.file, e.caption, e.favorite)
//       return newPhoto
//     });
//   };
// }
function createElement(e) {
  event.preventDefault();
  if (input.files[0]) {
    reader.readAsDataURL(input.files[0]);
    reader.onload = addPhoto
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

function appendCard(newPhoto) {
addMe.insertAdjacentHTML('afterbegin',
                 `<article class="card_content" id="${newPhoto.id}" >
                  <h3 class="card_title edit_this" maxlength="5">${newPhoto.title}</h3>
                  <section class="card_images">
                  <img class="card_image" src=${newPhoto.file}>
                  </section>
                  <h4 class="card_caption edit_captions">${newPhoto.caption}</h4>
                  <footer>
                    <button class="delete_me pic_icon"></button>
                    <button class="noFavorite"></button>
                  </footer>
                </article>`)
};


function getCardById(id) {
  for (var i = 0; i < imagesArr.length; i++) {
    if (id == imagesArr[i].id) {
      return imagesArr[i];
    }
  }
};

function editCard() {
  if (event.target.classList.contains('edit_this') || event.target.classList.contains('edit_captions')) {
    event.target.contentEditable = true;
    event.target.addEventListener('blur', saveChanges);
  }
}

function saveChanges() {
  var id = event.target.parentElement.id;
  var idCard = getCardById(id);
  if (event.target.classList.contains('card_title')) {
    idCard.updatePhoto(event.target.innerText, 'title')
  } else {
    idCard.updatePhoto(event.target.innerText, 'caption')
  }
  idCard.saveToStorage(imagesArr);
}

function eraser(event) {
  var element = event.target.parentElement.parentElement
  // console.log(element)
  var id = element.id
  console.log(id)
  var deleteCard = getCardById(id)
  console.log(deleteCard)
  var findDeleteIndex = imagesArr.indexOf(deleteCard)
  imagesArr.splice(findDeleteIndex, 1);
  element.remove();
  deleteCard.deleteFromStorage(imagesArr);
}

function createFavorite(event) {
  var saveFavorite = event.target.parentElement.parentElement.id
  var saveFavoriteCard = getCardById(saveFavorite)
  // console.log(saveFavoriteCard)
  var favIndex = imagesArr.indexOf(saveFavoriteCard)
  saveFavoriteCard.favoriteSaver(saveFavoriteCard)
// console.log(saveFavorite)
  createFavArray(saveFavoriteCard)
}

function createFavArray(saveFavoriteCard) {
  imagesArr.forEach(pic => {
    if (pic.favorite === true) {
      favoriteArray.push(saveFavoriteCard)
var favoriteIndex = favoriteArray.indexOf(saveFavoriteCard)
  // favoriteArray.splice(favoriteIndex, 1)
      console.log(favoriteArray)
    } 
  })
  for (var i = 1; i < favoriteArray.length; i++)

  favoriteBtn.innerText = `View ${[i]} Favorites` 
 // updateDom(favoriteArray)
}

// function updateDom(array){


// }
