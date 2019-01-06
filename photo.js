class Photo {
  constructor() {
    this.id = id;
    this.title = title;
    this.caption = caption;
    this.file = file;
    this.favorite = favorite;
    

  }

  saveToStorage() {
    localStorage.setItem('cards', JSON.stringify(imagesArr));
  }
  deleteFromStorage() {

  }
  updatePhoto() {

  }
}
