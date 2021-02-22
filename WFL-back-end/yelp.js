const yelp = require('yelp-fusion');
const client = yelp.client('4Jhi3AU6L1VvACc5PFFnwPgEAneIZHe8j_gjZ-RKQPAw8mM5NZWoRUunI691Tzn6jqt4Wkyq1o4q6o9dJS2gcRQnuXjDy99yNx3Uz3nUcGlZHPMgJjSIjWNxxIksYHYx');

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const business = await client.search({
            term: 'Hamburgers',
            location: 'baton rouge, la',
            limit: '10'
        })
        res.json(business.jsonBody.businesses[0].name);
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router;
