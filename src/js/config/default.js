import HomeController from '../controllers/HomeController';
import ErrorController from '../controllers/ErrorController';
import Data from '../store/Data';

// Глобальный конфиг
window.PARAMS = window.location.search;
window.STATE = new Data();
window.CLASSROUTESCLICK = '.routes';

const defaultConfig = {
  controller: {
    '/': {
      controller: 'HomeController',
      action: 'index',
      obj: new HomeController(),
      title: 'Главная',
    },
    '/404': {
      controller: 'ErrorController',
      action: '404',
      obj: new ErrorController(),
      title: '404',
    },
    '/ticket': {
      controller: 'ErrorController',
      action: 'ticket',
      obj: new HomeController(),
      title: 'Билеты',
    },
    '/contact': {
      controller: 'HomeController',
      action: 'contact',
      obj: new HomeController(),
      title: 'Контакты',
    },
  },
};

export default defaultConfig;
