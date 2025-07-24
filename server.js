const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Redirect root domain to www subdomain and force HTTPS
app.use((req, res, next) => {
  if (
    req.hostname === 'wahegurunursingclasses.com' ||
    req.hostname === 'wahegurunursingclasses.com'
  ) {
    // Force HTTPS + www
    return res.redirect(301, `https://www.wahegurunursingclasses.com${req.originalUrl}`);
  }
  next();
});

// Fallback: send index.html for any unknown route (optional)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 