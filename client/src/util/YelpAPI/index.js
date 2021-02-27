export const YelpAPI = {
    search(cuisine, sort, location) {
      if (!location.name)  {
        return fetch(`http://localhost:5000/api/${cuisine}/${sort}/${location.latitude}/${location.longitude}`).then(response => {
          console.log(response);
          return response.json();
        })
      } else {
        return fetch(`http://localhost:5000/search/${cuisine}/${sort}/${location.name}`).then(response => {
          console.log(response);
          return response.json();
        })
      }
   
    },

    new(location) {
      if (!location.name) {
        return fetch(`http://localhost:5000/api/new/${location.latitude}/${location.longitude}`).then(response => {
          console.log(response);
          return response.json();
        }).catch(err => {
          console.log(err);
        })
      } else {
        return fetch(`http://localhost:5000/search/new/${location.name}`).then(response => {
          console.log(response);
          return response.json();
        }).catch(err => {
          console.log(err);
        })
      }
     
    },

    cheap(cuisine, sort, location) {
      if (!location.name) {
        return fetch(`http://localhost:5000/api/${cuisine}/${sort}/cheap/${location.latitude}/${location.longitude}`).then(response => {
          console.log(response);
          return response.json();
        }).catch(err => {
          console.log(err);
        })
      } else {
        return fetch(`http://localhost:5000/search/${cuisine}/${sort}/cheap/${location.name}`).then(response => {
          console.log(response);
          return response.json();
        }).catch(err => {
          console.log(err);
        })
      }
    
    }
} 