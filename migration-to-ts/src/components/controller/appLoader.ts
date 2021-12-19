import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'f2f2936c0d894153883bb729d9d94515',
        });
    }
}

export default AppLoader;
