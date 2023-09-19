export interface articleCover {
  title: string;
  description: string;
  author: Author;
  date: string;
  id: string;
}

export interface Author {
  id: string;
  name: string;
}

interface article extends articleCover {
  topics: {
    title?: string;
    text: string[];
    image?: string;
    link?: {
      url: string;
      text: string;
    };
  }[];
}

export default article;
