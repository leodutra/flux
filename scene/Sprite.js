/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Sprite = function (width, height) {
    this._super_.call(this);
};

flux.Sprite.prototype = extend(flux.CanvasWrap, {
    draw: function (context, globals) {
        // TODO DRAW OVERRIDE
    }
});