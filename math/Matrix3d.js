function Matrix3d() {
	this.matrix = Float32Array(
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	)
}

Matrix3d.prototype = {

	reset: function() {
		var m = this.matrix
		m[0] = m[5] = m[10] = m[15] = 1
		m[1] = m[2] = m[3] = m[4] = m[6] = m[7] = m[8] = m[9] = m[11] = m[12] = m[13] = m[14] = 0
	},

	translate: function(x, y, z) {
		var m = this.matrix
		m[12] += x
		m[13] += y
		m[14] += z
	},

	translateX: function (n) {
		this.matrix[12] += n
	},

	translateY: function (n) {
		this.matrix[13] += n
	},

	translateZ: function (n) {
		this.matrix[14] += n
	},

	scale: function(x, y, z) {
		var m = this.matrix
		m[0] *= x
		m[5] *= y
		m[10] *= z
	},

	scalePos: function(s) {
		if (s) this.matrix[15] *= s
	},

	rotateX: function (r) {
		var m = this.matrix
		var cos = Math.cos(r)
			var sin = Math.sin(r)
			m[5] += cos
			m[6] += -sin
			m[9] += sin
			m[10] += cos
	},

	rotateY: function (r) {
		var m = this.matrix
		var cos = Math.cos(r)
			var sin = Math.sin(r)
			m[0] += cos
			m[2] += sin
			m[8] += -sin
			m[10] += cos
	},

	rotateZ: function (r) {
		var m = this.matrix
		var cos = Math.cos(r)
			var sin = Math.sin(r)
			m[0] += cos
			m[1] += -sin
			m[4] += sin
			m[5] += cos
	},

	clone: function() {
		var m = new Matrix3d()
		m.matrix = this.matrix.slice(0)
		return m
	},

	toFixed: function(n) {
		var clone = this.clone()
		var m = clone.matrix
		for (var i = m.length i--) {
			m[i] = m[i].toFixed(n) | 0
		}
		return clone
	},

	valueOf: function() {
		return 'Matrix3d('+ this.matrix.join(', ') + ')'
	},

	toString: function () {
		return this.valueOf()
	}
}
