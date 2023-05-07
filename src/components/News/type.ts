export type author = {
  name: string;
  image: string;
};

export type Topic = {
  title: string;
  text: string[];
  image?: string;
};

type Data = {
  title: string;
  authors: author[];
  introduction: string[];
  coverImage: {
    src: string;
    alt: string;
  };
  date: string;
  topics: Topic[];
};

export default Data;
