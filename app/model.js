/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Juan Foo (https://sketchfab.com/juanotron)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/personal-computer-b943e06de72c4b2b9ac6b9d7ca813f8f
Title: Personal Computer
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Model(props) {
  const { nodes, materials } = useLoader(GLTFLoader, '/personal_computer.glb')
  const myMesh = React.useRef()
  const bounce = React.useRef()

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    myMesh.current.rotation.y = a
    bounce.current.position.y = Math.cos(a * 3) - 1.5
  })

  return (
    <group {...props} dispose={null}>
      <group position={[0, -1.5, -5]} rotation={[-Math.PI / 2, 0, 0]} scale={0.015} ref={bounce}>
        <group rotation={[Math.PI / 2, Math.PI / -2, 0]} ref={myMesh}>
          <group position={[0, 222.2, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monitor_gray_0.geometry}
              material={materials.gray_metallic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monitor_vintage_2_0.geometry}
              material={materials.vintage_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monitor_white001_0.geometry}
              material={materials['white.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monitor_screen_0.geometry}
              material={materials.screen}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.monitor_black_0.geometry}
              material={materials.black}
            />
          </group>
          <group position={[12.1, 26.5, -9.7]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cpu_white_0.geometry}
              material={materials.white}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cpu_gray_metallic_0.geometry}
              material={materials.gray_metallic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cpu_metallic_0.geometry}
              material={materials.metallic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cpu_gray_0.geometry}
              material={materials.gray}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cpu_green_0.geometry}
              material={materials.green}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cpu_gray_stiker_0.geometry}
              material={materials.gray_stiker}
            />
          </group>
          <group
            position={[314.5, 2.8, 10.7]}
            rotation={[-Math.PI / 2, 0.2, 0]}
            scale={[100, 179.4, 100]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.kewboard_vintage_2_0.geometry}
              material={materials.vintage_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.kewboard_white_0.geometry}
              material={materials.white}
            />
            <group position={[-0.8, 0.9, 0.2]} rotation={[0, -1.5, 0]} scale={[1, 0.6, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cpu003_green_0.geometry}
                material={materials.green}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cpu003_gray_stiker_0.geometry}
                material={materials.gray_stiker}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane001_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.5, -0.8, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane003_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.5, -0.8, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane004_white001_0.geometry}
              material={materials['white.001']}
              position={[-0.5, -0.6, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane005_white_0.geometry}
              material={materials.white}
              position={[-0.3, -0.5, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane006_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.3, -0.6, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane007_white_0.geometry}
              material={materials.white}
              position={[-0.1, -0.5, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane009_white001_0.geometry}
              material={materials['white.001']}
              position={[0, -0.4, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane010_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.1, -0.6, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane012_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[0, 0.5, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane014_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.2, 0.5, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane011_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[0, -0.6, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_white_0.geometry}
              material={materials.white}
              position={[0.2, 0, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane008_white_0.geometry}
              material={materials.white}
              position={[-0.5, 0.7, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane013_white_0.geometry}
              material={materials.white}
              position={[-0.5, 0.8, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane015_white_0.geometry}
              material={materials.white}
              position={[-0.5, 0.9, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane016_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.5, 0.9, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane017_white_0.geometry}
              material={materials.white}
              position={[0.2, 0.7, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane018_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[0.1, 0.9, 0.2]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.1, 0.2, 0.1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane019_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.5, -0.6, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane020_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.5, 0.9, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane021_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.5, 0.8, 0.2]}
              scale={0.1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane022_vintage_2_0.geometry}
              material={materials.vintage_2}
              position={[-0.5, 0.7, 0.2]}
              scale={0.1}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.flopy_vintage_1_0.geometry}
            material={materials.vintage_1}
            position={[82.4, 26.7, -9.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_screen_0.geometry}
            material={materials.screen}
            position={[76.3, 223.2, -89.3]}
            rotation={[-Math.PI / 2, -0.1, 0]}
            scale={[67.6, 70.7, 62.7]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.flopy001_vintage_1_0.geometry}
            material={materials.vintage_1}
            position={[82.4, 26.7, -9.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.flopy002_vintage_1_0.geometry}
            material={materials.vintage_1}
            position={[82.4, 26.7, -9.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.vent_monitor_gray_0.geometry}
            material={materials.gray}
            position={[0, 222.3, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cpu001_gray_metallic_0.geometry}
            material={materials.gray_metallic}
            position={[12.1, 26.5, -9.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/personal_computer.glb')
