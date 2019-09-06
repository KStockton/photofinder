class Photo {
  constructor(id, title, file, caption, favorite) {
    this.id = id || Date.now();
    this.title = title;
    this.file = file;
    this.caption = caption;
    this.favorite = favorite || false;
  }
  saveToStorage(photos) {
    localStorage.setItem('cards', JSON.stringify(photos));
  }
  deleteFromStorage(index) {
    localStorage.setItem('cards', JSON.stringify(imagesArr));
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
  favoriteSaver(){
    console.log(this.favorite)
    if(this.favorite === false){
    this.favorite = true
    } 
    this.saveToStorage(this)
  }
  favoritedel() {
    console.log(this)
    this.favorite = false
    this.saveToStorage(this)
  }
}
