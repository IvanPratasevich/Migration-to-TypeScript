import Article from '../view/appView';
import { Methods } from '../enums/enums';
import { Endpoints } from '../enums/enums';
type optionsObject = { [apikey: string]: string };
class Loader {
  baseLink: string;
  options: { [key: string]: string };

  constructor(baseLink: string, options: { [key: string]: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: Endpoints; options?: Record<string, string> },
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

  makeUrl(options: optionsObject, endpoint: Endpoints) {
    const urlOptions: optionsObject = { ...this.options, ...options };
    let url: string = `${this.baseLink}${endpoint}?`;

    (Object.keys(urlOptions) as Array<keyof typeof urlOptions>).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: Endpoints, callback: (data: Article) => void, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: Article) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
