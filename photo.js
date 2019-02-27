class Photo {
  constructor(id, title, file, caption, favorite) {
    this.id = id || Date.now();
    this.title = title;
    this.file = file;
    this.caption = caption;
    this.favorite = favorite || false;
  }
  saveToStorage() {
    localStorage.setItem('cards', JSON.stringify(imagesArr));
  }
  deleteFromStorage(index) {
    // localStorage.setItem('cards', JSON.stringify(imagesArr));
    imagesArr.splice(index, 1)
    this.saveToStorage(imagesArr)
  }
  updatePhoto(text, type) {
    if (type == "title") {
      this.title = text;
    } if (type == "caption") {
      this.caption = text
    }
  }
  favoriteSaver(card){
    if(this.favorite === false){
    this.favorite = true
    } 
  }
  favoritedel(card) {
    this.favorite = false
    this.saveToStorage(card)
  }
}
