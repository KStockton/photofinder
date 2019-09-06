// ---------------- Variables ------------ //
var addCard = document.querySelector('#add_btn');
var favoriteBtn = document.querySelector('.view_btn')
var input = document.querySelector('.input');
var title = document.querySelector('#input_title')
var caption = document.querySelector('#input_caption')
var addMe = document.querySelector('.add_card')
var photoGallery = document.querySelector('.card_image');
var imagesArr = JSON.parse(localStorage.getItem('cards')) || [];
var reader = new FileReader();


// ------------ Event Listners --------------
addCard.addEventListener('click', createElement);
window.addEventListener('load', grabStoredCards)
addMe.addEventListener('dblclick', editCard); 
favoriteBtn.addEventListener('click', grabFavorites)
addMe.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete_me')) {
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
    appendCard(e.id, e.title, e.file, e.caption, e.favorite)
  })
  for (var i = 0; i < imagesArr.length; i++) {
    console.log(imagesArr[i])
    imagesArr[i] = new Photo(imagesArr[i].id, imagesArr[i].file, imagesArr[i].title, imagesArr[i].caption);
  }
}

//Grabs all the favorites in an array// Haven't removed non favorites yet.
function grabFavorites(event){
  event.preventDefault()
  let favoritesArray = imagesArr.reduce((acc, curVal) =>{
    if(curVal.favorite === true){
      acc.push(curVal)
    }
    return acc;
  },[])
  let result = document.querySelector('main')
  result.innerHTML = ''

  favoritesArray.forEach(loveItem =>{
    appendCard(loveItem.id, loveItem.title, loveItem.file, loveItem.caption, loveItem.favorite)
  })
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
}

function appendCard(id, title, result, caption, favorite) {
  const deleteMe = `images/delete.svg`
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
    <img class="delete_me pic_icon" src=${deleteMe}>
    </div>
    <img class="noFavorite" src=${loveFavorite}>
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
  event.preventDefault()
  var element = event.target.parentElement.parentElement
  var id = element.id
  var deleteCard = getCardById(id)  
  var findDeleteIndex = imagesArr.indexOf(deleteCard)
  deleteCard.deleteFromStorage(findDeleteIndex);
  console.log(element)
  element.remove();
}

function createFavorite(event) {
  event.preventDefault()
  var saveFavorite = event.target.parentElement.parentElement.id
  var saveFavoriteCard = getCardById(saveFavorite)
  if(saveFavoriteCard.favorite === false){
      saveFavoriteCard.favoriteSaver()
  } else if(saveFavoriteCard.favorite === true){
    saveFavoriteCard.favoritedel()
  
  }

  // let trys = imagesArr.reduce((acc, curVal) =>{
  //   console.log('begin', acc)
  //   if(curVal.favorite === true ){
  //     acc++
  //     console.log('add', acc)
  //   } else if(curVal.favorite === false && acc !== 0){
  //     acc--
  //     console.log('subtract', acc)
  //   }
  //     console.log(acc)
  //     return acc;
  // },0)
  
  // favoriteBtn.innerText = `View ${trys} Favorites`
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