// ---------------- Variables ------------
var addCard = document.querySelector('#add_btn');
var input = document.querySelector('.input');
var title = document.querySelector('#input_title')
var caption = document.querySelector('#input_caption')
var addMe = document.querySelector('.add_card')
var photoGallery = document.querySelector('.card_image');
var imagesArr = [];
var reader = new FileReader();

// ------------ Event Listners --------------
addCard.addEventListener('click', createElement);
addMe.addEventListener('dblclick', editCard); 

addMe.addEventListener('click', function (event) {
if (event.target.classList.contains('delete_me')) {
  eraser(event)
  }
});

// -------------- Functions -------------------- //
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
  var cardPart = `<article class="card_content" id="${newPhoto.id}" >
                  <h3 class="card_title edit_this" maxlength="5">${newPhoto.title}</h3>
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

window.onload = function loaded() {
  if (localStorage.getItem('cards') !== null) {
    imagesArr = JSON.parse(localStorage.getItem('cards'));
    imagesArr = imagesArr.map(function(e) {
      var newPhoto = new Photo(Date.now(), e.title, e.file, e.caption, e.favorite)
      appendCard(newPhoto)
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

function editCard() {
  if (event.target.classList.contains('edit_this') || event.target.classList.contains('edit_captions')) {
    event.target.contentEditable = true;
    event.target.addEventListener('blur', saveChanges);
  }
}

function saveChanges() {
  var id = event.target.parentElement.id;
  var idCard = getCardById(id);
  var findIndex = imagesArr.indexOf(idCard);
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
  console.log(id)
  var deleteCard = getCardById(id)
  var findDeleteIndex = imagesArr.indexOf(deleteCard)
  imagesArr.splice(findDeleteIndex, 1);
  element.remove();
  deleteCard.deleteFromStorage(imagesArr);
}
