const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const RENDER_API_KEY = process.env.RENDER_API_KEY;

app.get('/services', async (req, res) => {
  try {
    const response = await fetch('https://api.render.com/v1/services?limit=20', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${RENDER_API_KEY}`
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
