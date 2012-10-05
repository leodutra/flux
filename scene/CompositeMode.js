/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.CompositeMode = {
    /** This is the default setting and draws new shapes on top of the existing canvas content.
     * @constant
     */
    SOURCE_OVER: 'source-over',

    /** New shapes are drawn behind the existing canvas content.
     * @constant
     */
    DESTINATION_OVER: 'destination-over',

    /** The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent
     * @constant
     */
    SOURCE_IN: 'source-in',

    /** The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.
     * @constant
     */
    DESTINATION_IN: 'destination-in',

    /** The new shape is drawn where it doesn't overlap the existing canvas content
     * @constant
     */
    SOURCE_OUT: 'source-out',

    /** The existing content is kept where it doesn't overlap the new shape.
     * @constant
     */
    DESTINATION_OUT: 'destination-out',

    /** The new shape is only drawn where it overlaps the existing canvas content.
     * @constant
     */
    SOURCE_ATOP: 'source-atop',

    /** The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.
     * @constant
     */
    DESTINATION_ATOP: 'destination-atop',

    /** Where both shapes overlap the color is determined by adding color values.
     * @constant
     */
    LIGHTER: 'lighter',

    /** Where both shapes overlap the color is determined by subtracting color values.
     * @constant
     */
    DARKER: 'darker',

    /** Shapes are made transparent where both overlap and drawn normal everywhere else.
     * @constant
     */
    XOR: 'xor',

    /** Only draws the new shape and removes everything else.
     * @constant
     */
    COPY: 'copy'
};