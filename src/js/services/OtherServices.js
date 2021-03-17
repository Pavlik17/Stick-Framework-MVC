import ApiService from './ApiService';

class OtherServices {
  logicTicket(countries, options) { // Бизнес логика тикета!
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);

    // Просто находим класс
    const selectElems = document.querySelectorAll('select');
    const selectInstances = M.FormSelect.init(selectElems, {
      classes: 'js_currency',
    });

    // События для работы листа
    const currency = document.querySelectorAll('.js_currency li');
    currency.forEach((element) => {
      element.onclick = function (elem) {
        const span = this.querySelector('span');
        if (STATE.getState('currency')[span.innerText]) STATE.setState('stateCurrency', span.innerText);
      };
    });

    // Автокомплит
    const elemsOrigin = document.querySelectorAll('.autocompleteOrigin, .autocompleteDestination');
    const instancesOrigin = M.Autocomplete.init(elemsOrigin, {
      data: options,
    });

    // Показать дату
    const datepicker = document.querySelectorAll('.datepickerDepart, .datepickerReturn');
    const instancesDatepicker = M.Datepicker.init(datepicker, {
      format: 'yyyy-mm',
    });

    // Форма AJAX
    const btnSendAjax = document.getElementById('btnSendAjax');
    btnSendAjax.onclick = async function () {
      const prices = await ApiService.prices({
        currency: STATE.currency[STATE.getState('stateCurrency')],
        depart_date: datepicker[0].value,
        destination: countries[elemsOrigin[0].value],
        origin: countries[elemsOrigin[1].value],
        return_date: datepicker[1].value,
      });

      const listPrices = Object.keys(prices.data);
      const emptyBasket = document.getElementById('emptyBasket');

      if (listPrices.length) {
        emptyBasket.classList.remove('active');
      } {
        emptyBasket.classList.add('active');
        // Вывод карточек
      }
    };
  }
}

export default OtherServices;
