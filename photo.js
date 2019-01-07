class Photo {
  constructor(id, title, caption, file, favorite) {
    this.id = id || Date.now();
    this.title = title;
    this.caption = caption;
    this.file = file;
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
