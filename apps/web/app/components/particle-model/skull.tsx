import { FC, memo, Suspense, useMemo, useRef } from 'react';
import { Color, Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';
import { useFrame, useLoader } from '@react-three/fiber';
import { useSpring } from 'framer-motion';
import { vertexShader, fragmentShader } from './shaders';
import { defaultUniforms, getParticleArrays } from './utils';
import { DURATION, ParticleShaderMaterial, ParticleUniforms, VELOCITY } from './particle-model';

export interface SkullParticleProps {
  isTransition: boolean;
}

const skullUniforms: ParticleUniforms = {
  ...defaultUniforms,
  uColor1: { value: new Color('crimson') },
  uColor2: { value: new Color('darkgrey') },
};

export const SkullParticle: FC<SkullParticleProps> = memo((props) => {
  const { isTransition } = props;
  const scale = useSpring(isTransition ? 1 : 3, { duration: DURATION, velocity: VELOCITY });
  const shaderMaterial = useRef<ParticleShaderMaterial>(null);

  const { nodes } = useLoader(GLTFLoader, '/models/skull.glb', (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    loader.setDRACOLoader(dracoLoader);
  });
  const mesh = nodes.Scene.children[0] as Mesh;
  const geometry = mesh.geometry.toNonIndexed();
  const newMesh = new Mesh(geometry);

  const sampler = new MeshSurfaceSampler(newMesh).build();
  const [particlePosition, particleRandomness] = useMemo(() => getParticleArrays(sampler), [sampler]);

  useFrame(({ clock }) => {
    if (!shaderMaterial.current) return;
    shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime();
    scale.set(isTransition ? 1 : 3);
    shaderMaterial.current.uniforms.uScale.value = scale.get();
  });

  return (
    <Suspense fallback={null}>
      <points rotation={[0, 0.4, 0]} scale={0.8}>
        <bufferGeometry attach="geometry">
          <bufferAttribute attach="attributes-position" count={particlePosition.length / 3} array={particlePosition} itemSize={3} />
          <bufferAttribute attach="attributes-aRandom" count={particleRandomness.length / 3} array={particleRandomness} itemSize={3} />
        </bufferGeometry>
        <shaderMaterial
          attach="material"
          uniforms={skullUniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          depthWrite={false}
          depthTest={false}
          vertexColors
          transparent
          ref={shaderMaterial}
        />
      </points>
    </Suspense>
  );
});
SkullParticle.displayName = 'SkullParticle';
