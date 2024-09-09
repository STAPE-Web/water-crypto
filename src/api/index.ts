import * as HomeAPI from './functions/home';

class API {
    public home = HomeAPI;
}

const api = new API();

export default api;