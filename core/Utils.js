/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */

flux.Utils = {

    extend: function(super_, extension) {
        var o = function(){};
        o.prototype = new super_();
        o = new o();
        for (var property in extension) {
            o[property] = extension[property];
        }
        return o;
    },

    deepCopyArray: function (array)
    {
        return array instanceof Array ? JSON.parse(JSON.stringify(array)) : null;
    }
};