const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World! CI/CD Pipeline is working perfectly! 🚀' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Export the app for testing purposes
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
