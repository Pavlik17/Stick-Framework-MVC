import Other from '../core/Other';
import error404 from '../view/error/404';

export default class ErrorController {
  action404() {
    Other.render(error404());
  }
}
