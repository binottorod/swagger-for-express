const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a greeting
 *     responses:
 *       200:
 *         description: Greeting text
 */
router.get('/hello', (req, res) => {
  res.send('Hello World!');
});

module.exports = router;