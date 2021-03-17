import State from '../core/State';



class Data extends State {
  constructor() {
    super();
    // Курсы валюты
    this.currency = {
      '$ US Dollar': 'USD',
      '€ Euro': 'EURO',
    };
    // На данный момент валюта
    this.stateCurrency = null;
  }
}

export default Data;
