export const YelpAPI = {
    search(cuisine, sort, location) {
      return fetch(`http://localhost:5000/api/${cuisine}/${sort}/${location.latitude}/${location.longitude}`).then(response => {
        console.log(response);
        return response.json();
      })
    },

    new(location) {
      return fetch(`http://localhost:5000/api/new/${location.latitude}/${location.longitude}`).then(response => {
        console.log(response);
        return response.json();
      }).catch(err => {
        console.log(err);
      })
    },

    cheap(cuisine, sort, location) {
      return fetch(`http://localhost:5000/api/${cuisine}/${sort}/cheap/${location.latitude}/${location.longitude}`).then(response => {
        console.log(response);
        return response.json();
      }).catch(err => {
        console.log(err);
      })
    }
} 