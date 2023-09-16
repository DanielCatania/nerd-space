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
