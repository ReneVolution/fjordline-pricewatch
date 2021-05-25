module.exports = {
  apps: [{
    name: 'GetFjordline Prices :: EUR',
    script: 'npm run fetch:de',
    cron_restart: "*/15 * * * *",
    autorestart: false
  }, {
    name: 'GetFjordline Prices :: NOK',
    script: 'npm run fetch:no',
    cron_restart: "*/15 * * * *",
    autorestart: false
  }, {
    name: 'GetFjordline Prices :: DK',
    script: 'npm run fetch:dk',
    cron_restart: "*/15 * * * *",
    autorestart: false
  }]
};
