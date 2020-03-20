export default class Comments {
    id: string;
    idNews: string;
    comments: string;

    constructor(id: string, idNews: string, comments: string) {
      this.id = id;
      this.idNews = idNews;
      this.comments = comments;
    }
  }
