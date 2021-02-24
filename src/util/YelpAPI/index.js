export const YelpAPI = {
    search(cuisine, sort) {
      return fetch(`http://localhost:5000/api/${cuisine}/${sort}`).then(response => {
        console.log(response);
        return response.json();
      })
    },

    new() {
      return fetch(`http://localhost:5000/api/new`).then(response => {
        console.log(response);
        return response.json();
      }).catch(err => {
        console.log(err);
      })
    },

    cheap(cuisine, sort) {
      return fetch(`http://localhost:5000/api/${cuisine}/${sort}/cheap`).then(response => {
        console.log(response);
        return response.json();
      }).catch(err => {
        console.log(err);
      })
    }
} 