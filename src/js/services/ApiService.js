import axios from 'axios';
import apiConfig from '../config/api';

class ApiService {
  constructor(url) {
    this.url = url;
  }

  async countries() {
    try {
      const response = await axios.get(`${this.url}/countries`);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async cities() {
    try {
      const response = await axios.get(`${this.url}/cities`);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async airlines() {
    try {
      const response = await axios.get(`${this.url}/airlines`);
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async prices(params) {
    try {
      const response = await axios.get(`${this.url}/prices/cheap`, {
        params,
      });
      return response.data;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default new ApiService(apiConfig['aviasales-api']);
