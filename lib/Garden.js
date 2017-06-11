'use strict';

const Lawnmover = require('./Lawnmover').Lawnmover;

/**
 * @classdesc Garden to mow with lawnmovers
 * 
 * @class
 */
class Garden {
    /**
     * @constructor
     * @param {integer} width - width of the garden, in cases
     * @param {integer} height - height of the garden, in cases
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.lawnmover_list = [];
    }

    /**
     * Adds a lawnmover to the garden, to the specified position, with specified Orientation, and specified path
     * 
     * @param {integer} position_x - horizontal position of the lawnmover. 0 is left.
     * @param {integer} position_y - vertical position of the lawnmover. 0 is down.
     * @param {Orientation} orientation - orientation (to the north/east/west/south)
     * @param {string[]} path - steps the lawnmover will do (array of letters A (move), D (turn right) and G (turn left))
     * @return {Lawnmover} The newly created lawnmover
     * @memberof Garden
     */
    generateLawnmover(position_x, position_y, orientation, path) {
        const lawnmover = new Lawnmover(position_x, position_y, orientation, this.width, this.height, path);
        this.lawnmover_list.push(lawnmover);
        return lawnmover;
    }

    /**
     * Make all the lawnmovers do their full path sequentially
     * 
     * @return {Garden} this
     * @memberof Garden
     */
    runLawnmovers() {
        this.lawnmover_list.forEach((lawnmover) => lawnmover.run());

        return this;
    }
}

module.exports = {
    Garden: Garden,
};
