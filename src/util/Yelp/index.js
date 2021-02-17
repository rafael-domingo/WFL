// TODO: Fix this API call with back-end server implementation

// var apiKey = '4Jhi3AU6L1VvACc5PFFnwPgEAneIZHe8j_gjZ-RKQPAw8mM5NZWoRUunI691Tzn6jqt4Wkyq1o4q6o9dJS2gcRQnuXjDy99yNx3Uz3nUcGlZHPMgJjSIjWNxxIksYHYx';


// export const Yelp = {
//     search(cuisine) {
//         var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${cuisine}&location=Houston`;
        
//         return fetch(url, {
//             headers: {
//                 Authorization: `Bearer ${apiKey}`
//             }
//         }).then(response => {
//             if (!response) {
//                 console.log('error');
//                 return [];
//             }
//             console.log(response);
//             return response.json();
//         }).then(jsonResponse => {
//             if (!jsonResponse) {
//                 console.log('jsonError');
//                 return [];
//             }
//             console.log(jsonResponse);
//             return jsonResponse;
//         }) 
//     }
// }