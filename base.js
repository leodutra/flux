/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
flux = {

    extend: function (super_, extension)
    {
        var base = function () {};
        base.prototype = new super_();
        base = new base();
        for (var property in extension)
        {
            base[property] = extension[property];
        }
        base.super_ = super_;
        return base;
    },

    deepCopyArray: function (array)
    {
        return array instanceof Array ? JSON.parse(JSON.stringify(array)) : null;
    }
};