import glsl from 'glslify';

export const vertexShader = glsl`
	attribute vec3 aRandom;
	varying vec3 vPosition;
	uniform float uTime;
	uniform float uScale;

	void main() {
		vPosition = position;

		float time = uTime * 4.;

		vec3 pos = vPosition;
		pos.x += sin(time * aRandom.x) * 0.02;
		pos.y += cos(time * aRandom.y) * 0.02;
		pos.z += cos(time * aRandom.z) * 0.02;
		
		pos.x *= uScale + sin(pos.y * 3. + time) * (1. - uScale) * 10.;
		pos.y *= uScale + cos(pos.z * 3. + time) * (1. - uScale) * 10.;
		pos.z *= uScale + sin(pos.x * 3. + time) * (1. - uScale) * 10.;

		pos *= uScale;

		vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);

		gl_Position = projectionMatrix * mvPosition;
		gl_PointSize = 6.5 / -mvPosition.z;
	}
`;

export const fragmentShader = glsl`
	varying vec3 vPosition;
	uniform vec3 uColor1;
	uniform vec3 uColor2;

	void main() {
		float depth = vPosition.z * 0.5 + 0.5;
		vec3 color = mix(uColor1, uColor2, depth);

		gl_FragColor = vec4(color, depth * 0.3 + 0.2);
	}
`;
