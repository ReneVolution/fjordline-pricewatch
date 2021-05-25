# Fjordline Pricewatch ⛴️

A very simplified price watcher for Fjordline's ferry services. It only considers the the main ferry price without taking into account the cabin setup or breakfast/dinner reservations.

The pure intend for this was to find price changes when planning a trip to Norway with **Team Krivit International Fishing**. As of that, the price is calculated for our specific needs (6 ppl, 2 cars,…). See [Configuration](#configuration) for more details on how to tailor this to your needs.

It can fetch the economy prices for the German, Norwegian and Danish API's (Spoiler: The norwegian is typically the cheapest option). These can be run individually using npm scripts or using PM2 in cron mode - which in turn will write 3 log files, one for each locale.

<h3 style="color:red">Caution: This software will not be maintained as it had been written for one-off use</h3>

## Installation

To install all dependencies, run the following command in the project root:

```
npm install
```

## Bring your own configuration

Since the request is very specific to your needs, you'll need to provide you own `journeyConfig.json`, which then will be used as request payload for the Fjordline _getJourneys_ endpoint. 

The best way to capture the request payload is to visit their booking page and enter the details for the first 2 steps. Then, with the Browser Developer tools open, search for the _getJourneys_ request and copy the request payload. Store this as `journeyConfig.json` in the project root and you should be good to go.

## Run Once

If you only want to run it once, use one of the npm scripts available.

**German API**
```
npm run fetch:de
```

**Danish API**
```
npm run fetch:dk
```

**Norwegian API**
```
npm run fetch:no
```

**Run all sequentially**
```
npm run fetch:all
```

## Run as Cron

To run these scripts, we leverage PM2's cron functionality, configured in _ecosystem.config.js_.

Start the server via

```
pm2 start
```

