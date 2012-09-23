/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.CanvasRenderer = function () {
    if(this instanceof flux.CanvasRenderer) {
        flux.Renderer.call(this);    
    }    
};
_ = flux.CanvasRenderer.prototype = new flux.Renderer();
