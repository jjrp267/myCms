export default class News {
    id: string;
    title: string;
    subtitle: string;
    description: string;

    constructor(id: string, title: string, subtitle: string, description: string ) {
      this.id = id;
      this.title = title;
      this.subtitle = subtitle;
      this.description = description;
    }

  }

  export class Hero {
    id: number;
    name: string;
    images: any;

    constructor(id: number, name: string, images: any) {
        this.id = id;
        this.name = name;
        this.images = images;
    }
}
