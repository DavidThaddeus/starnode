import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Stars(props) {
  const ref = useRef()
  
  const [sphere] = useMemo(() => {
    const COUNT = 2600
    const positions = new Float32Array(COUNT * 3)

    for (let i = 0; i < COUNT; i++) {
      const radius = Math.random() * 25 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    
    return [positions]
  }, [])

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow, calm drift — easier on the eyes than the previous fast spin.
      ref.current.rotation.x -= delta / 60
      ref.current.rotation.y -= delta / 90
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00d4ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  )
}

function MovingStars() {
  const ref = useRef()
  
  const [positions] = useMemo(() => {
    const COUNT = 500
    const positions = new Float32Array(COUNT * 3)

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    
    return [positions]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      // Gentle, slow sway for the foreground star layer.
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 25) * 0.08
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime / 18) * 0.08
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

const StarField = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
      frameloop="always"
    >
      <Stars />
      <MovingStars />
    </Canvas>
  )
}

export default StarField