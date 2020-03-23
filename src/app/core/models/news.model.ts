export default class News {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    fecAlta: string;

    constructor(id: string,
                title: string,
                subtitle: string,
                description: string,
                fecAlta: string ) {
      this.id = id;
      this.title = title;
      this.subtitle = subtitle;
      this.description = description;
      this.fecAlta = fecAlta;
    }

  }

