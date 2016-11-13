/*
 Reference: Three.js (mikael emtinger http://gomo.se/)
 */

function Sound2D(sources, radius, volume, loop) {
    this.Node.call(this)
    this.radius = radius || 0
    this.sound = new Sound(sources, volume, loop)
}

Sound2D.prototype = extend(Node, {

    calculateVolumeAndPan: function (v2) {

        var distance = cameraRelativePosition.length()
        if (this.radius < distance) {
            this.domElement.volume = 0
        } else {
            this.domElement.volume = this.volume * (1 - distance / this.radius)
        }
    }
})
