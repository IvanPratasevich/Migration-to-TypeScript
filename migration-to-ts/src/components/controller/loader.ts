import Article from '../view/appView';
import { Methods } from '../enums/enums';
class Loader {
  baseLink: string;
  options: { [key: string]: string };

  constructor(baseLink: string, options: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint = 'string', options = {} },
    callback: () => void = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load(Methods.get, endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options = {}, endpoint = 'string') {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    (Object.keys(urlOptions) as Array<keyof typeof urlOptions>).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint = 'string', callback: (data: Article) => void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: Article) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
