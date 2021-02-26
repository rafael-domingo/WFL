const yelp = require('yelp-fusion');
const client = yelp.client('4Jhi3AU6L1VvACc5PFFnwPgEAneIZHe8j_gjZ-RKQPAw8mM5NZWoRUunI691Tzn6jqt4Wkyq1o4q6o9dJS2gcRQnuXjDy99yNx3Uz3nUcGlZHPMgJjSIjWNxxIksYHYx');

const express = require('express');
const router = express.Router();

router.get('/:cuisine', async (req, res) => {
    try {
        console.log(req.params.cuisine);
        const business = await client.search({
            term: req.params.cuisine,
            location: 'baton rouge, la',
            limit: '20',
            sort_by: 'rating',
            categories: 'restaurants, All'
        })

        // Generate random number to select a random restaurant from list
        const index = Math.floor(Math.random() * Math.floor(20));
        
        res.json(business.jsonBody.businesses[index]);
    } catch(err) {
        res.json({message: err})
    }
})


router.get('/:cuisine/:sort/cheap/:latitude/:longitude', async (req, res) => {
    try {
        const business = await client.search({
            term: req.params.cuisine,
            latitude: req.params.latitude,
            longitude: req.params.longitude,
            limit: '20',
            sort_by: req.params.sort,
            price: 1,
            categories: 'restaurants, All'
        })
        res.json(business.jsonBody.businesses[0]);
    } catch(err) {
        res.json({message: err})
        console.log(err);
    }
})

router.get('/:cuisine/:sort/:latitude/:longitude', async (req, res) => {
    try {
        const business = await client.search({
            term: req.params.cuisine,
            latitude: req.params.latitude,
            longitude: req.params.longitude,
            limit: '20',
            sort_by: req.params.sort
        })
         // Generate random number to select a random restaurant from list
         const index = Math.floor(Math.random() * Math.floor(20));
        
        res.json(business.jsonBody.businesses[index]);
    } catch(err) {
        res.json({messsage: err})
        console.log(err);
    }
})


router.get('/new/:latitude/:longitude', async (req, res) => {
    try {
        const hotAndNew = await client.search({
            term: '',
            latitude: req.params.latitude,
            longitude: req.params.longitude,
            attributes: "hot_and_new",
            categories: 'restaurants, All'
        })
        // Generate random number to select a random restaurant from list
        // const index = Math.floor(Math.random() * Math.floor(20));
        console.log(hotAndNew.jsonBody.businesses[0]);
        res.json(hotAndNew.jsonBody.businesses[0]);
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;
