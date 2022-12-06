import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { Color, Mesh, Shader, ShaderMaterial, Vector3 } from 'three';
import { Canvas } from '@react-three/fiber';
import { Portal } from '@portfolio-2022/ui';
import { SkullParticle } from './skull';
import { Root } from './elements';
import { particlesState } from '../../atoms';
import { Debug } from './debug';

export type ShaderUniforms = Shader['uniforms'];

export interface ParticleUniforms extends ShaderUniforms {
  uColor1: { value: Color };
  uColor2: { value: Color };
  uTime: { value: number };
  uScale: { value: number };
}

export interface ParticleUniformRef {
  uniforms: ParticleUniforms;
}
export type ParticleShaderMaterial = ShaderMaterial & Mesh & ParticleUniformRef;

export const PARTICLE_NUM = 50000;
export const DURATION = 80;
export const VELOCITY = 10;

export const ParticleModel: FC = () => {
  const [particles] = useRecoilState(particlesState);
  const { isTransition } = particles;

  return (
    <Portal>
      <Root isTransition={isTransition}>
        <Canvas
          camera={{
            fov: 50,
            near: 0.1,
            far: 100,
            position: new Vector3(0, 1, 2.7),
          }}
          gl={{ antialias: true, alpha: true }}
        >
          <SkullParticle isTransition={isTransition} />
          <Debug />
        </Canvas>
      </Root>
    </Portal>
  );
};
ParticleModel.displayName = 'ParticleModel';
