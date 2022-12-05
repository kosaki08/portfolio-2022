import { Vector3 } from 'three';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import { PARTICLE_NUM, ParticleUniforms } from './particle-model';

export const getParticleArrays = (sampler: MeshSurfaceSampler): [Float32Array, Float32Array] => {
  const position = new Float32Array(PARTICLE_NUM * 3);
  const randomness = new Float32Array(PARTICLE_NUM * 3);

  for (let i = 0; i < PARTICLE_NUM; i++) {
    const newPosition = new Vector3();
    sampler.sample(newPosition);
    position.set([newPosition.x, newPosition.y, newPosition.z], i * 3);
    randomness.set([Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1], i * 3);
  }
  return [position, randomness];
};

export const defaultUniforms: Pick<ParticleUniforms, 'uScale' | 'uTime'> = {
  uTime: { value: 0 },
  uScale: { value: 1 },
};
