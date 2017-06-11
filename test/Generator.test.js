'use strict';

const expect = require('chai').expect;

const GardenGenerator = require('./../lib/Generator').GardenGenerator;

describe('Generator tests', () => {
    describe('Cycle', () => {
        let generator = new GardenGenerator();
        it('Should be LawnmoverPositionGenerator after GardenGenerator processing', () => {
            generator = generator.process('1 1');
            expect(generator.constructor.name).to.equal('LawnmoverPositionGenerator');
        });
        it('Should be LawnmoverGenerator after LawnmoverPositionGenerator processing', () => {
            generator = generator.process('1 1 N');
            expect(generator.constructor.name).to.equal('LawnmoverGenerator');
        });
        it('Should be LawnmoverPositionGenerator after LawnmoverGenerator processing', () => {
            generator = generator.process('A');
            expect(generator.constructor.name).to.equal('LawnmoverPositionGenerator');
        });
    });
});
