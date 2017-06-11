'use strict';

/**
 * @classdesc Basic class for orientations
 * 
 * @class
 */
class Orientation {}

/**
 * @classdesc Orientation to the north
 * 
 * @class
 */
class NorthOrientation extends Orientation {
    /**
     * Gives the next orientation clockwise
     * 
     * @static
     * @return {EastOrientation}
     * @memberof NorthOrientation
     */
    static next() {
        return EastOrientation;
    }

    /**
     * Gives the next orientation anticlockwise
     * 
     * @static
     * @return {WestOrientation}
     * @memberof NorthOrientation
     */
    static previous() {
        return WestOrientation;
    }

    /**
     * Gives the coordinates of the next case in function of input coordinates
     *  for this orientation
     * 
     * @static
     * @param {integer} position_x - Origin horizontal position
     * @param {integer} position_y - Origin vertical position
     * @return {Object} An object containing the new horizontal position (position_x)
     *  and the new vertical position (position_y)
     * @memberof NorthOrientation
     */
    static getNextCase(position_x, position_y) {
        return {
            position_x: position_x,
            position_y: position_y + 1,
        }
    }
}

/**
 * @classdesc Orientation to the east
 * 
 * @class
 */
class EastOrientation extends Orientation  {
    /**
     * Gives the next orientation clockwise
     * 
     * @static
     * @return {SouthOrientation}
     * @memberof EastOrientation
     */
    static next() {
        return SouthOrientation;
    }

    /**
     * Gives the next orientation anticlockwise
     * 
     * @static
     * @return {NorthOrientation}
     * @memberof EastOrientation
     */
    static previous() {
        return NorthOrientation;
    }

    /**
     * Gives the coordinates of the next case in function of input coordinates
     *  for this orientation
     * 
     * @static
     * @param {integer} position_x - Origin horizontal position
     * @param {integer} position_y - Origin vertical position
     * @return {Object} An object containing the new horizontal position (position_x)
     *  and the new vertical position (position_y)
     * @memberof EastOrientation
     */
    static getNextCase(position_x, position_y) {
        return {
            position_x: position_x + 1,
            position_y: position_y,
        }
    }
}

/**
 * @classdesc Orientation to the south
 * 
 * @class
 */
class SouthOrientation extends Orientation  {
    /**
     * Gives the next orientation clockwise
     * 
     * @static
     * @return {WestOrientation}
     * @memberof SouthOrientation
     */
    static next() {
        return WestOrientation;
    }

    /**
     * Gives the next orientation anticlockwise
     * 
     * @static
     * @return {EastOrientation}
     * @memberof SouthOrientation
     */
    static previous() {
        return EastOrientation;
    }

    /**
     * Gives the coordinates of the next case in function of input coordinates
     *  for this orientation
     * 
     * @static
     * @param {integer} position_x - Origin horizontal position
     * @param {integer} position_y - Origin vertical position
     * @return {Object} An object containing the new horizontal position (position_x)
     *  and the new vertical position (position_y)
     * @memberof SouthOrientation
     */
    static getNextCase(position_x, position_y) {
        return {
            position_x: position_x,
            position_y: position_y - 1,
        }
    }
}

/**
 * @classdesc Orientation to the west
 * 
 * @class
 */
class WestOrientation extends Orientation  {
    /**
     * Gives the next orientation clockwise
     * 
     * @static
     * @return {NorthOrientation}
     * @memberof WestOrientation
     */
    static next() {
        return NorthOrientation;
    }

    /**
     * Gives the next orientation anticlockwise
     * 
     * @static
     * @return {SouthOrientation}
     * @memberof WestOrientation
     */
    static previous() {
        return SouthOrientation;
    }

    /**
     * Gives the coordinates of the next case in function of input coordinates
     *  for this orientation
     * 
     * @static
     * @param {integer} position_x - Origin horizontal position
     * @param {integer} position_y - Origin vertical position
     * @return {Object} An object containing the new horizontal position (position_x)
     *  and the new vertical position (position_y)
     * @memberof WestOrientation
     */
    static getNextCase(position_x, position_y) {
        return {
            position_x: position_x - 1,
            position_y: position_y,
        }
    }
}

module.exports = {
    NorthOrientation: NorthOrientation,
    EastOrientation: EastOrientation,
    SouthOrientation: SouthOrientation,
    WestOrientation: WestOrientation,
};
