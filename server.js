const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: process.env.SERVER_IP || 'play.applemc.fun',
  port: parseInt(process.env.SERVER_PORT) || 25565,
  username: process.env.BOT_USERNAME || 'BotAFK_001',
  version: '1.21.1'
});

bot.once('spawn', () => {
  console.log(`[Bot] Logged in as ${bot.username}`);
  bot.chat('/login yourpassword'); // optional login command
  // No further actions after spawn
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  console.log(`[${username}]: ${message}`);
});

bot.on('end', () => {
  console.log('[Bot] Disconnected from server.');
});
