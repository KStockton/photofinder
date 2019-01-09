class Photo {
  constructor(id, title, file, caption, favorite) {
    this.id = id || Date.now();
    this.title = title;
    this.file = file;
    this.caption = caption;
    this.favorite = false;
    

  }

  saveToStorage() {
    localStorage.setItem('cards', JSON.stringify(imagesArr));
  }
  deleteFromStorage() {
    localStorage.setItem('cards', JSON.stringify(imagesArr));

  }
  updatePhoto() {

  }
}
