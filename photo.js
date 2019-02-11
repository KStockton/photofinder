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
  deleteFromStorage() {
    localStorage.setItem('cards', JSON.stringify(imagesArr));
  }
  updatePhoto(text, type) {
    if (type == "title") {
      this.title = text;
    } if (type == "caption") {
      this.caption = text
    }
  }
  favoriteSaver(card){
    this.favorite = true
    this.saveToStorage(card)
  }
}
