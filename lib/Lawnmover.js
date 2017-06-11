'use strict';

/**
 * @classdesc Represents a lawnmover, which will be able to move following its path, in the limits
 *  of the garden it belongs
 * 
 * @class
 */
class Lawnmover {
    /**
     * @constructor
     * @param {integer} position_x - initial horizontal position of the lawnmover. 0 is left.
     * @param {integer} position_y - initial vertical position of the lawnmover. 0 is down.
     * @param {Orientation} orientation - initial orientation of the lawnmover (to the north/east/west/south)
     * @param {integer} width_limit - horizontal position that cannot be exceeded
     * @param {integer} height_limit - vertical position that cannot be exceeded
     * @param {string[]} path - steps the lawnmover will follow
     */
    constructor(position_x, position_y, orientation, width_limit, height_limit, path) {
        this.position_x = position_x;
        this.position_y = position_y;
        this.orientation = orientation;
        this.width_limit = width_limit;
        this.height_limit = height_limit;
        this.path = path;

        this.action_mapping = {
            D: 'rotateRight',
            G: 'rotateLeft',
            A: 'move',
        }
    }

    /**
     * Rotates the lawnmover to its right
     * 
     * @return {Lawnmover} this
     * @memberof Lawnmover
     */
    rotateRight() {
        this.orientation = this.orientation.next();

        return this;
    }

    /**
     * Rotates the lawnmover to its left
     * 
     * @return {Lawnmover} this
     * @memberof Lawnmover
     */
    rotateLeft() {
        this.orientation = this.orientation.previous();

        return this;
    }

    /**
     * Moves the lawnmover by one case in the direction it follows if possible
     *  i.e. not out of the garden
     * 
     * @return {Lawnmover} this
     * @memberof Lawnmover
     */
    move() {
        const next_case = this.orientation.getNextCase(this.position_x, this.position_y);
        this.position_x = Math.max(0, Math.min(next_case.position_x, this.width_limit));
        this.position_y = Math.max(0, Math.min(next_case.position_y, this.height_limit));

        return this;
    }

    /**
     * Makes the lawnmover accomplish all steps of its path
     * 
     * @memberof Lawnmover
     * @return {Lawnmover} this
     */
    run() {
        this.path.forEach((action) => {
            this[this.action_mapping[action]]();
        });

        return this;
    }
}

module.exports = {
    Lawnmover: Lawnmover,
};
