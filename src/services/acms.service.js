import http from "../http-common";
import axios from 'axios';

class ACMSDataService {

  login(data) {
    console.log(data);
      return http.post(`/user`, data);
  }

  createConfig(data) {
      return http.post("/configuration", data);
  }
}
export default new ACMSDataService();
