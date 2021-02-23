import Axios from 'axios';

export const YelpAPI = {
    search(cuisine) {
      return fetch(`http://localhost:5000/api/${cuisine}`).then(response => {
        console.log(response);
        return response.json();
      })
 
    },

    new(cuisine) {
      return fetch(`http://localhost:5000/api/${cuisine}/new`).then(response => {
        console.log(response);
        return response.json();
      }).catch(err => {
        console.log(err);
      })
    }
}