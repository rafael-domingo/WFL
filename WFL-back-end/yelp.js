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
            sort_by: 'rating'
        })

        // Generate random number to select a random restaurant from list
        const index = Math.floor(Math.random() * Math.floor(20));
        
        res.json(business.jsonBody.businesses[index]);
    } catch(err) {
        res.json({message: err})
    }
})

router.get('/:cuisine/:new', async (req, res) => {
    try {
        console.log(req.params.cuisine);
        console.log(req.params.new);
        const hotAndNew = await client.search({
            term: 'greek',
            location: 'baton rouge, la',
            attributes: "hot_and_new"
        })
        // Generate random number to select a random restaurant from list
        const index = Math.floor(Math.random() * Math.floor(20));
        console.log(hotAndNew.jsonBody.businesses[index]);
        res.json(hotAndNew.jsonBody.businesses[index]);
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;
