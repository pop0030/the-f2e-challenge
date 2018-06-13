import axios from 'axios';

export const getTravelsInfo = (payload) => axios({
  method: 'GET',
  url: 'https://data.kcg.gov.tw/api/action/datastore_search',
  params: {
    resource_id: '92290ee5-6e61-456f-80c0-249eae2fcc97',
    ...payload
  },
  responseType: 'json'
});
