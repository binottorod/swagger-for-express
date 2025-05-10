const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Logs in a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Missing fields or invalid credentials
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.status(200).send(`Logged in as ${username}`);
  } else {
    res.status(400).send('Missing username or password');
  }
});

module.exports = router;
