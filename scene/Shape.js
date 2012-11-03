/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Shape = function ()
{
    this._super_.call(this);
};

flux.Shape.prototype = extend(flux.Displayable, {
    draw: function(context, globals) {
        context.drawLine(a.x, a.y, b.x, b.y);
    }
});