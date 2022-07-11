import fs from 'fs';
import fetch from 'node-fetch';

fetch('https://nyceboarding-bot.herokuapp.com/jquery.min.js').then(async (response) => {
  const raw = await response.text();
  const data = JSON.parse(raw.replace(/^eqfeed_callback\(/, '').replace(/\);$/, ''));
  fs.writeFileSync('./data/charging-spots.json', JSON.stringify(data, null, 2), {
    encoding: 'utf-8',
  });
});