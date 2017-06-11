'use strict';

const fs = require('fs');
const readline = require('readline');

const GardenGenerator = require('./lib/Generator').GardenGenerator;

const line_reader = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
});

let generator = new GardenGenerator();

line_reader.on('line', (line) => {
    generator = generator.process(line);
});

line_reader.on('close', () => {
    generator.garden.runLawnmovers();
    generator.garden.lawnmover_list.forEach((lawnmover, index) => {
        console.log(`Lawnmover ${index} is now here :`, {
            position_x: lawnmover.position_x,
            position_y: lawnmover.position_y,
            orientation: lawnmover.orientation,
        });
    });
});
