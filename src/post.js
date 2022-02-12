export default class Post {
  constructor(tittle, img) {
    this.tittle = tittle;
    this.img = img;
    this.date = new Date();
  }
  toString() {
    return JSON.stringify(
      {
        tittle: this.tittle,
        date: this.date.toJSON(),
        img: this.img,
      },
      null,
      2
    );
  }
  get uppercaseTittle() {
    return this.title.toUpperCase();
  }
}
