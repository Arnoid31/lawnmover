'use strict';

const expect = require('chai').expect;

const Lawnmover = require('./../lib/Lawnmover').Lawnmover;
const Orientation = require('./../lib/Orientation');

const NorthOrientation = Orientation.NorthOrientation;
const EastOrientation = Orientation.EastOrientation;
const SouthOrientation = Orientation.SouthOrientation;
const WestOrientation = Orientation.WestOrientation;

describe('Lawnmover tests', () => {
    describe('Possible moves', () => {
        it('Should be able to move north', () => {
            const lawnmover = new Lawnmover(1, 1, NorthOrientation, 2, 2, []);
            lawnmover.move();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 1,
                position_y: 2,
            });
        });
        it('Should be able to move east', () => {
            const lawnmover = new Lawnmover(1, 1, EastOrientation, 2, 2, []);
            lawnmover.move();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 2,
                position_y: 1,
            });
        });
        it('Should be able to move south', () => {
            const lawnmover = new Lawnmover(1, 1, SouthOrientation, 2, 2, []);
            lawnmover.move();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 1,
                position_y: 0,
            });
        });
        it('Should be able to move west', () => {
            const lawnmover = new Lawnmover(1, 1, WestOrientation, 2, 2, []);
            lawnmover.move();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 0,
                position_y: 1,
            });
        });
    });
    describe('Impossible moves', () => {
        it('Should not be able to move north if limit of field', () => {
            const lawnmover = new Lawnmover(1, 2, NorthOrientation, 2, 2, []);
            lawnmover.move();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 1,
                position_y: 2,
            });
        });
        it('Should not be able to move east if limit of field', () => {
            const lawnmover = new Lawnmover(2, 1, EastOrientation, 2, 2, []);
            lawnmover.move();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 2,
                position_y: 1,
            });
        });
        it('Should not be able to move south if limit of field', () => {
            const lawnmover = new Lawnmover(1, 0, SouthOrientation, 2, 2, []);
            lawnmover.move();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 1,
                position_y: 0,
            });
        });
        it('Should not be able to move west if limit of field', () => {
            const lawnmover = new Lawnmover(0, 1, WestOrientation, 2, 2, []);
            lawnmover.move();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 0,
                position_y: 1,
            });
        });
    });
    describe('Runs', () => {
        it('Should be able to do a NADA path from 0, 0', () => {
            const lawnmover = new Lawnmover(0, 0, NorthOrientation, 2, 2, ['A', 'D', 'A']);
            lawnmover.run();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 1,
                position_y: 1,
            });
        });
        it('Should be able to do a NAGA path from 1, 0', () => {
            const lawnmover = new Lawnmover(1, 0, NorthOrientation, 2, 2, ['A', 'G', 'A']);
            lawnmover.run();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 0,
                position_y: 1,
            });
        });
        it('Should be able to do a NAGDA path from 0, 0', () => {
            const lawnmover = new Lawnmover(0, 0, NorthOrientation, 2, 2, ['A', 'G', 'D', 'A']);
            lawnmover.run();
            expect({
                position_x: lawnmover.position_x,
                position_y: lawnmover.position_y,
            }).to.deep.equal({
                position_x: 0,
                position_y: 2,
            });
        });
    });
});
