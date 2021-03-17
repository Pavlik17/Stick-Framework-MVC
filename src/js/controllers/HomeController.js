import Other from '../core/Other';
import OtherServices from '../services/OtherServices';
import locations from '../services/locationsService';
import header from '../view/template/header';
import banner from '../view/template/banner';
import footer from '../view/template/footer';
import form from '../view/template/form';
import select from '../view/template/select';

export default class HomeController {
  async actionIndex() {

    const content = header() + banner() + banner() + banner() + footer();
    Other.render(content);

    const parallax = document.querySelectorAll('.parallax');
    const instancesParallax = M.Parallax.init(parallax);
  }

  async actionTicket() {
    Other.render(`
    <div style="position: fixed; left: 0; right: 0; bottom: 0; top: 0;display: flex; justify-content: center; align-items: center">
         <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    `);

    const countries = {};
    const option = {};
    const data = await locations.init();
    data[0].forEach((item) => {
      item.citiesList = data[1].filter((itemFilter) => item.code == itemFilter.country_code);

      for (let i = 0; i < item.citiesList.length; i++) {
        countries[`${item.citiesList[i].name}, ${item.name}`] = item.citiesList[i].code;
        option[`${item.citiesList[i].name}, ${item.name}`] = null;
      }
    });

    // рендерим
    const content = header() + select() + form();
    Other.render(content);

    // Скрипты подгрузка
    const other = new OtherServices();
    other.logicTicket(countries, option);

    const parallax = document.querySelectorAll('.parallax');
    const instancesParallax = M.Parallax.init(parallax);
  }

  actionContract() {
    console.log('Своя логика');
  }
}
