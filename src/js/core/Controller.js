import defaultConfig from '../config/default';
import Other from './Other';

const Controller = {

  filterNeedController(path) {
    if (!path[0] === '/') return new Error(`Error the core at controller: ${path}`);
    if (typeof defaultConfig.controller[path] === 'undefined') {
      window.location.pathname = '/404';
      document.title = defaultConfig.controller[path].title;
    }

    document.title = defaultConfig.controller[path].title;
    return defaultConfig.controller[path];
  },
  initController(controller, action, obj) {
    obj[`action${Other.capitalizeFirstLetter(action)}`]();
  },
};

export default Controller;
