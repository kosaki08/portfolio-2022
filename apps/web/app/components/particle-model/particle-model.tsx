import { FC } from 'react';
import { Color, Mesh, Vector3 } from 'three';
import { Canvas } from '@react-three/fiber';
import { Portal } from '@portfolio-2022/ui';
import { SkullParticle } from './skull';
import { Root } from './elements';

export interface ParticleUniforms {
  uColor1: { value: Color };
  uColor2: { value: Color };
  uTime: { value: number };
  uScale: { value: number };
}

export interface UniformRef {
  uniforms: ParticleUniforms;
}
export type ShaderMaterial = Mesh & UniformRef;

export const PARTICLE_NUM = 10000;
export const DURATION = 80;
export const VELOCITY = 10;

export const ParticleModel: FC = () => {
  return (
    <Portal>
      <Root>
        <Canvas
          camera={{
            fov: 50,
            near: 0.1,
            far: 100,
            position: new Vector3(0, 1, 2.7),
          }}
          gl={{ antialias: true, alpha: true }}
        >
          <group>
            <SkullParticle isShow={true} />
          </group>
        </Canvas>
      </Root>
    </Portal>
  );
};
ParticleModel.displayName = 'ParticleModel';
