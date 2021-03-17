import Controller from './Controller';

const Routes = {
  pathSite: window.location.pathname,
  init() {
    const nameController = Controller.filterNeedController(location.pathname);
    Controller.initController(nameController.controller, nameController.action, nameController.obj);
  },
  router() {
    const tagsRoute = document.querySelectorAll(CLASSROUTESCLICK);

    if (!tagsRoute.length) return;

    tagsRoute.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        window.history.pushState('', 'Title', event.currentTarget.dataset.href);
        const nameController = Controller.filterNeedController(event.currentTarget.dataset.href);
        Controller.initController(nameController.controller, nameController.action, nameController.obj);
      });
    });
  },
};

export default Routes;
