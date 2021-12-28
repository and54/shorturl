const express = require('express');
const router = express.Router();
const dbo = require('../db/conn');

const collection = 'urlList';

router.get('/:shortUrl', async (req, res, next) => {
 const { shortUrl } = req.params;
  const dbConnect = dbo.getDb();
  dbConnect.collection(collection).findOne({ shortUrl }, (err, result) => {
    if (err) res.status(400).send('Error fetching shortUrl!');
    else {
      console.log('fetched data', result);
      if (!result?.url) res.status(400).send('shortUrl doesn\'t exists!');
      else res.json({ ...result });
    }
  });
});

router.post('/', async(req, res, next) => {
  const { url } = req.body;
  if (!url) res.status(400).send('URL not received');
  const shortUrl = createShort();
  const insertDoc = { url, shortUrl };
  const dbConnect = dbo.getDb();
  dbConnect.collection(collection).insertOne(insertDoc, (err, result) => {
    if (err) res.status(400).send("Error inserting url!");
    else {
      console.log(`Added a new match with id ${result.insertedId}`);
      res.json({ id: result.insertedId, ...insertDoc })
    }
  });
});

const createShort = (size = 8) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const random = () => Math.floor(Math.random() * letters.length);
  return [...new Array(size)].map(() => letters.charAt(random())).join('');
}

module.exports = router;
