'use strict';

const expect = require('chai').expect;

const Garden = require('./../lib/Garden').Garden;
const Lawnmover = require('./../lib/Lawnmover').Lawnmover;
const Orientation = require('./../lib/Orientation');

const NorthOrientation = Orientation.NorthOrientation;
const EastOrientation = Orientation.EastOrientation;
const SouthOrientation = Orientation.SouthOrientation;
const WestOrientation = Orientation.WestOrientation;

describe('Garden tests', () => {
    it('Should be able to move two lawnmovers', () => {
        const garden = new Garden(5, 5);
        const lawnmover_1 = garden.generateLawnmover(1, 2, NorthOrientation, ['G', 'A', 'G', 'A', 'G', 'A', 'G', 'A', 'A']);
        const lawnmover_2 = garden.generateLawnmover(3, 3, EastOrientation, ['A', 'A', 'D', 'A', 'A', 'D', 'A', 'D', 'D', 'A']);
        garden.runLawnmovers();
        expect({
            position_x: lawnmover_1.position_x,
            position_y: lawnmover_1.position_y,
            orientation: lawnmover_1.orientation,
        }).to.deep.equal({
            position_x: 1,
            position_y: 3,
            orientation: NorthOrientation,
        });
        expect({
            position_x: lawnmover_2.position_x,
            position_y: lawnmover_2.position_y,
            orientation: lawnmover_2.orientation,
        }).to.deep.equal({
            position_x: 5,
            position_y: 1,
            orientation: EastOrientation,
        });
    });
});
