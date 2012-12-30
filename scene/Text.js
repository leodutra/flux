/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Text = function (value, font, align, baseline) {
    this._super_.call(this);
    this.font = font || new flux.Font();
};

flux.Text.prototype = extend(flux.Displayable, {

    font: null,
    align: 'start',
    baseline: 'alphabetic',
    value: '',


    draw: function (context, globals) {
        // TODO DRAW OVERRIDE
    }
});