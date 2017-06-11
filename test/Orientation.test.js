'use strict';

const expect = require('chai').expect;

const Orientation = require('./../lib/Orientation');

const NorthOrientation = Orientation.NorthOrientation;
const EastOrientation = Orientation.EastOrientation;
const SouthOrientation = Orientation.SouthOrientation;
const WestOrientation = Orientation.WestOrientation;

describe('Orientation tests', () => {
    describe('NorthOrientation tests', () => {
        it('Should have upper next case', () => {
            expect(NorthOrientation.getNextCase(1, 1)).to.deep.equal({
                position_x: 1,
                position_y: 2,
            });
        });
    });

    describe('EastOrientation tests', () => {
        it('Should have rightmost next case', () => {
            expect(EastOrientation.getNextCase(1, 1)).to.deep.equal({
                position_x: 2,
                position_y: 1,
            });
        });
    });

    describe('SouthOrientation tests', () => {
        it('Should have lower next position', () => {
            expect(SouthOrientation.getNextCase(1, 1)).to.deep.equal({
                position_x: 1,
                position_y: 0,
            });
        });
    });

    describe('WestOrientation tests', () => {
        it('Should have leftmost next position', () => {
            expect(WestOrientation.getNextCase(1, 1)).to.deep.equal({
                position_x: 0,
                position_y: 1,
            });
        });
    });
});