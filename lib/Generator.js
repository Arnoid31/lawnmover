'use strict';

const joi = require('joi');

const Orientation = require('./../lib/Orientation');
const Garden = require('./Garden').Garden;

const NorthOrientation = Orientation.NorthOrientation;
const EastOrientation = Orientation.EastOrientation;
const SouthOrientation = Orientation.SouthOrientation;
const WestOrientation = Orientation.WestOrientation;

/**
 * This is the tricky part.
 * Generator is a robot that does an action then changes itself to another generator
 *  which does something else.
 * It allows to handle lots of lawnmovers (in the limits of the RAM, this should be optimized)
 */

/**
 * @classdesc Basic class for generators
 * 
 * @class
 */
class Generator {}

/**
 * @classdesc Gets the initial position of the lawnmover and gives it to LawnmoverGenerator
 *  so it is able to instantiate the lawnmover with all informations it needs
 * 
 * @class
 */
class LawnmoverPositionGenerator extends Generator {
    /**
     * @constructor
     * @param {Garden} garden
     * @memberof LawnmoverPositionGenerator
     */
    constructor(garden) {
        super();
        this.garden = garden;

        this.orientation_mapping = {
            N: NorthOrientation,
            E: EastOrientation,
            W: WestOrientation,
            S: SouthOrientation,
        }
    }

    /**
     * Internal method, it is just done to check if the line's values are right
     * 
     * @param {string[]|integer[]} line 
     * @param {Function} callback
     * @return {*} callback()
     * @memberof LawnmoverPositionGenerator
     */
    validate(line, callback) {
        return joi.object().keys({
            position_x: joi.number().integer().min(0).required(),
            position_y: joi.number().integer().min(0).required(),
            orientation: joi.string().valid(['N', 'E', 'W', 'S']),
        }).validate({
            position_x: line[0],
            position_y: line[1],
            orientation: line[2],
        }, (error) => {
            return callback(error)
        });
    }

    /**
     * Reads the line, formats it and gives it to LawnmoverGenerator
     * 
     * @param {string} line
     * @return {LawnmoverGenerator} - Ready to instantiate a lawnmover !
     * @memberof LawnmoverPositionGenerator
     */
    process(line) {
        const splitted_line = line.split(' ');
        return this.validate(splitted_line, (error) => {
            if (error) {
                throw error;
            }
            return new LawnmoverGenerator(
                this.garden,
                splitted_line[0],
                splitted_line[1],
                this.orientation_mapping[splitted_line[2]]
            );
        });
    }
}

/**
 * @classdesc Creates a lawnmover with given params, and then gets ready for next lawnmover instantiation
 * 
 * @class
 */
class LawnmoverGenerator extends Generator {
    /**
     * @constructor
     * @param {Garden} garden 
     * @param {integer} position_x 
     * @param {integer} position_y 
     * @param {Orientation} orientation
     * @memberof LawnmoverGenerator 
     */
    constructor(garden, position_x, position_y, orientation) {
        super();
        this.garden = garden;
        this.position_x = position_x;
        this.position_y = position_y;
        this.orientation = orientation;
    }

    /**
     * Internal method, it is just done to check if the line's values are right
     * 
     * @param {string[]} line 
     * @param {Function} callback
     * @return {*} callback()
     * @memberof LawnmoverGenerator
     */
    validate(line, callback) {
        return joi.object().keys({
            path: joi.array().required().items(joi.string().valid(['A', 'G', 'D'])).min(1),
        }).validate({
            path: line,
        }, (error) => {
            return callback(error)
        });
    }

    /**
     * Reads and formats the line, creates a lawnmover with path from the line
     *  and then get ready to instantiate another lawnmover
     * 
     * @param {string} line 
     * @return {LawnmoverPositionGenerator} - To be filled with new lawnmover position
     * @memberof LawnmoverGenerator
     */
    process(line) {
        const splitted_line = line.split('');
        return this.validate(splitted_line, (error) => {
            if (error) {
                throw error;
            }
            this.garden.generateLawnmover(this.position_x, this.position_y, this.orientation, splitted_line);
            return new LawnmoverPositionGenerator(this.garden);
        });
    }
}

/**
 * @classdesc Instantiate a new Garden object with given line (width + height), that will be
 *  used when instantiating lawnmovers
 * 
 * @class
 */
class GardenGenerator extends Generator {
    /**
     * Internal method, it is just done to check if the line's values are right
     * 
     * @param {integer[]} line 
     * @param {Function} callback
     * @return {*} callback()
     * @memberof GardenGenerator
     */
    validate(line, callback) {
        return joi.object().keys({
            garden_width: joi.number().integer().min(1).required(),
            garden_height: joi.number().integer().min(1).required(),
        }).validate({
            garden_width: line[0],
            garden_height: line[1],
        }, (error) => {
            return callback(error)
        });
    }

    /**
     * Reads and formats the line, creates a garden with corresponding width and height
     *  then gives it to LawnmoverPositionGenerator
     * 
     * @param {string} line 
     * @return {LawnmoverPositionGenerator} - To be filled with new lawnmover position
     * @memberof GardenGenerator
     */
    process(line) {
        const splitted_line = line.split(' ');
        return this.validate(splitted_line, (error) => {
            if (error) {
                throw error;
            }
            return new LawnmoverPositionGenerator(new Garden(splitted_line[0], splitted_line[1]));
        });
    }
}

module.exports = {
    GardenGenerator: GardenGenerator,
};
