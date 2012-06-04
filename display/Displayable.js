/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Displayable = function ()
{
    if (this instanceof flux.Displayable)
    {
        flux.Node.call(this);
        this.transform = null;
        // TODO adjust transform for HTML5 Canvas
        this.composite = flux.CompositeMode.SOURCE_OVER;
        // ~= AS3 blendMode
        // this.graphics = new flux.Graphics();
        // TODO cacheAsBitmap (AS3)?
        // TODO filters?
        // TODO mask?
    }
};

flux.Displayable.prototype = flux.extend(new flux.Node, {

    });