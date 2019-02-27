// ---------------- Variables ------------ //
var addCard = document.querySelector('#add_btn');
var favoriteBtn = document.querySelector('.view_btn')
var input = document.querySelector('.input');
var title = document.querySelector('#input_title')
var caption = document.querySelector('#input_caption')
var addMe = document.querySelector('.add_card')
var photoGallery = document.querySelector('.card_image');
var imagesArr = JSON.parse(localStorage.getItem('cards')) || [];
console.log(imagesArr)
var reader = new FileReader();
var favCounter = 0

// ------------ Event Listners --------------
addCard.addEventListener('click', createElement);

window.addEventListener('load', grabStoredCards)

addMe.addEventListener('dblclick', editCard); 

addMe.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete_me')) {
    console.log(imagesArr)
  eraser(event)
  } 
});

addMe.addEventListener('click', function(event) {
  if (event.target.classList.contains('noFavorite')) {
  createFavorite(event)
  } 
})


// -------------- Functions -------------------- //

function grabStoredCards(){
  imagesArr.forEach(e => {
    console.log(e.id)
    appendCard(e.id, e.title, e.file, e.caption, e.favorite)
  })
  for (var i = 0; i < imagesArr.length; i++) {
    imagesArr[i] = new Photo(imagesArr[i].id, imagesArr[i].file, imagesArr[i].title, imagesArr[i].caption);
  }
      // appendCard(photocard.id, photocard.title, photocard.file, photocard.caption, photocard.favorite)
      console.log(imagesArr)
}

function createElement(e) {
  event.preventDefault();
  if (input.files[0]) {
    reader.readAsDataURL(input.files[0]);
    reader.onload = addPhoto
  }
}

function addPhoto(e) {
  var newPhoto = new Photo(Date.now(), title.value, e.target.result, caption.value);
  imagesArr.push(newPhoto);
  appendCard(newPhoto.id, newPhoto.title, newPhoto.file, newPhoto.caption, newPhoto.favorite);
  newPhoto.saveToStorage(imagesArr);
  title.value = '';
  caption.value = '';
  // console.log(newPhoto)
}

function appendCard(id, title, result, caption, favorite) {
  if(favorite === false) {
    var loveFavorite = `images/favorite.svg`
  } else if(favorite === true) {
    var loveFavorite = `images/favorite-active.svg`
  } 
addMe.insertAdjacentHTML('afterbegin',
                 `<article class="card_content" id="${id}" >
                  <h3 class="card_title edit_this" maxlength="5">${title}</h3>
                  <section class="card_images">
                  <img class="card_image" src=${result}>
                  </section>
                  <h4 class="card_caption edit_captions">${caption}</h4>
                  <footer>
                    <img class="delete_me pic_icon">
                    <img  class="noFavorite" src=${loveFavorite}>
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
  console.log(element)
  var id = element.id
  // console.log(id)

  var deleteCard = getCardById(id)
  // console.log(deleteCard)
  // console.log(imagesArr)
  
  var findDeleteIndex = imagesArr.indexOf(deleteCard)
  
  // imagesArr.splice(findDeleteIndex, 1);
  deleteCard.deleteFromStorage(findDeleteIndex);
  element.remove();
}

function createFavorite(event) {
  var saveFavorite = event.target.parentElement.parentElement.id
  var saveFavoriteCard = getCardById(saveFavorite)
  var favIndex = imagesArr.indexOf(saveFavoriteCard)


  saveFavoriteCard.favoriteSaver(saveFavorite)

  favCounter++
  favoriteBtn.innerText = `View ${favCounter} Favorites`
  
  
  saveFavoriteCard.saveToStorage(imagesArr)
  
  

  console.log(saveFavoriteCard)
  // saveFavoriteCard.favoriteSaver(saveFavoriteCard)
}

// function createFavArray(saveFavoriteCard) {
//   imagesArr.forEach(pic => {
//     if (pic.favorite === true) {
//       favoriteArray.push(saveFavoriteCard)
//     } 
//   })
//   for (var i = 1; i < favoriteArray.length; i++)

//   favoriteBtn.innerText = `View ${[i]} Favorites` 
//  // updateDom(favoriteArray)
// }

// function removeFavoriteInArray(event) {
//   var deleteFavorite = event.target.parentElement.parentElement.id
//   if(pic.favorite !== true ) {}
// var favoriteIndex = favoriteArray.indexOf(deleteFavorite)
//   favoriteArray.splice(favoriteIndex, 1)
//   console.log(favoriteArray)
//       console.log(favoriteIndex)
//   console.log(deleteFavorite)
// }

// window.onload = function loaded() {
//   if (localStorage.getItem('cards') !== null) {
//     imagesArr = JSON.parse(localStorage.getItem('cards'));
//     imagesArr = imagesArr.map(function(e) {
//       var newPhoto = new Photo(Date.now(), e.title, e.file, e.caption, e.favorite)
//       return newPhoto
//     });
//   };
// }