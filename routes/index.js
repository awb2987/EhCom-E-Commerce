const router = require('express').Router();
const apiRoutes = require('./api');

// Use API routes
router.use('/api', apiRoutes);

// Fallback route for handling unmatched routes
router.use((req, res) => {
  res.status(404).json({ message: "Wrong Route!" });
});

module.exports = router;
