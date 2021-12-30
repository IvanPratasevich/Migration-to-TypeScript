export interface Article {
  articles: [];
  sources: [];
}
type source = {
  id: string;
  name: string;
};

export interface DataNews {
  author: string;
  content: string;
  title: string;
  url: string;
  description: string;
  publishedAt: string;
  source: source;
  urlToImage: string;
}
