/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Shape = function ()
{
    this.Displayable.call(this);
};

flux.Shape.prototype = extend(flux.Displayable, {
    draw: function(context, relative) {
        context.drawLine(relative.x + a.x, relative.y + a.y, relative.x + b.x, relative.y + b.y);
    }
});