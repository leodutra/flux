/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
flux.Array = {
    deepCopy: function (array)
    {
        return array instanceof Array ? JSON.parse(JSON.stringify(array)) : null;
    }
};