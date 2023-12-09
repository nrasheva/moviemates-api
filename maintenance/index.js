const cron = require('node-cron');

// Render spins down a Free web service that goes 15 minutes without receiving inbound traffic
const keepRenderAlive = cron.schedule('*/14 * * * *', async () => {
  try {
    await fetch('https://moviemates-api.onrender.com');
  } catch (error) {
    console.log(error);
  }
});

module.exports = { keepRenderAlive };
