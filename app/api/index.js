import axios from 'axios';

/*export const getTravelsInfo = (payload) => axios({
  method: 'GET',
  url: 'https://data.kcg.gov.tw/api/action/datastore_search',
  params: {
    resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97',
    ...payload
  },
  responseType: 'json'
});*/

export const getTravelsInfo = (payload) => axios({
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  url: 'http://data.taipei:8080/api/3/action/datastore_search',
  data: {
    // Chinese => '36847f3f-deff-4183-a5bb-800737591de5',
    // English => 'b446d576-0e9d-4ff3-9360-d5f907722988',
    resource_id: '36847f3f-deff-4183-a5bb-800737591de5',
    ...payload
  }
});
