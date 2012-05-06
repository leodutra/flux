/*
 * Flux JavaScript Library
 * Copyright (c) 2010 Leonardo Dutra Constancio
 * MIT License (http://jsflux.googlecode.com/svn/trunk/mit-license.txt)
 */
/*
 Reference: Three.js (mikael emtinger http://gomo.se/)
 */

flux.Sound = function(sources, radius, volume, loop)
{
	if(this instanceof flux.Sound)
	{
		flux.Object2D.call(this);

		this.isLoaded = this.isPlaying = false;
		this.duration = -1;
		this.radius = radius;

		var audio = this._dom = new Audio();
		audio.FLUXSound = this;
		audio.pan = audio.volume = 0;
		audio.loop = loop === undefined ? true : loop;

		this.sources = sources = sources instanceof Array ? sources : [sources];

		var L = sources.length;
		var cache;
		for(var i = 0; i < L; )
		{
			cache = sources[i].toLowerCase();
			cache = cache.indexOf('.mp3') !== -1 ? 'audio/mpeg' : cache.indexOf('.ogg') !== -1 ? 'audio/ogg' : cache.indexOf('.wav') !== -1 ? 'audio/wav' : 0;
			if(audio.canPlayType(cache))
			{
				( cache = document.createElement('source')).src = this.sources[i];
				audio.appendChild(cache);
				audio.addEventListener('canplay', this._onLoad, true);
				audio.load();
				break;
				// is it ok?
			}
		}
	}
};

flux.Sound.prototype = new flux.Object2D();
flux.Sound.prototype._onLoad = function()
{
	var sound = this.FLUXSound;
	if(this.FLUXSound.isLoaded)
		return;
	this.removeEventListener('canplay', this._onLoad, true);
	sound.isLoaded = true;
	sound.duration = this.duration;
	if(sound.isPlaying)
		sound.play();
};

flux.Sound.prototype.play = function(startTime)
{

	this.isPlaying = true;
	if(this.isLoaded)
	{
		this._dom.play();
		if(startTime)
			this._dom.currentTime = startTime % this.duration;
	}
};

flux.Sound.prototype.pause = function()
{

	this.isPlaying = false;
	this._dom.pause();
};

flux.Sound.prototype.stop = function()
{

	this.isPlaying = false;
	this._dom.pause();
	this._dom.currentTime = 0;
};

flux.Sound.prototype.calculateVolumeAndPan = function(cameraRelativePosition)
{

	// FIXME
	/*var distance = cameraRelativePosition.length();
	 if(this.radius < distance)
	 this.domElement.volume = 0;
	 else
	 this.domElement.volume = this.volume * (1 - distance/this.radius);*/
};
