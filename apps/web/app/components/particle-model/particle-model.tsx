import { FC, useState } from 'react';
import { Color, Mesh, Vector3 } from 'three';
import { Canvas } from '@react-three/fiber';
import { Portal } from '@portfolio-2022/ui';
import { SkullParticle } from './skull';
import { Root } from './elements';
import { TempButton } from './temp';

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

export const PARTICLE_NUM = 50000;
export const DURATION = 80;
export const VELOCITY = 10;

export const ParticleModel: FC = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <Portal>
      <Root>
        <TempButton id="temp-button" style={{ color: 'white' }} onClick={() => setIsShow((prev) => !prev)} />
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
            <SkullParticle isShow={isShow} />
          </group>
        </Canvas>
      </Root>
    </Portal>
  );
};
ParticleModel.displayName = 'ParticleModel';
