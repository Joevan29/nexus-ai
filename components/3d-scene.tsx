"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text3D } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function FloatingBird({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<Mesh>(null)

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 8, 6]} />
        <meshStandardMaterial color="#10b981" />
        {/* Simple bird body */}
        <mesh position={[0.4, 0, 0]}>
          <coneGeometry args={[0.1, 0.3, 4]} />
          <meshStandardMaterial color="#059669" />
        </mesh>
        {/* Wings */}
        <mesh position={[-0.2, 0.1, 0.2]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.4, 0.1, 0.05]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
        <mesh position={[-0.2, 0.1, -0.2]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.4, 0.1, 0.05]} />
          <meshStandardMaterial color="#10b981" />
        </mesh>
      </mesh>
    </Float>
  )
}

function FloatingButterfly({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position}>
        {/* Body */}
        <mesh>
          <cylinderGeometry args={[0.02, 0.02, 0.4]} />
          <meshStandardMaterial color="#475569" />
        </mesh>
        {/* Wings */}
        <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <sphereGeometry args={[0.12, 8, 6]} />
          <meshStandardMaterial color="#84cc16" transparent opacity={0.8} />
        </mesh>
        <mesh position={[-0.15, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <sphereGeometry args={[0.12, 8, 6]} />
          <meshStandardMaterial color="#84cc16" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.1, 0.1, 0]} rotation={[0, 0, Math.PI / 8]}>
          <sphereGeometry args={[0.08, 8, 6]} />
          <meshStandardMaterial color="#10b981" transparent opacity={0.7} />
        </mesh>
        <mesh position={[-0.1, 0.1, 0]} rotation={[0, 0, -Math.PI / 8]}>
          <sphereGeometry args={[0.08, 8, 6]} />
          <meshStandardMaterial color="#10b981" transparent opacity={0.7} />
        </mesh>
      </mesh>
    </Float>
  )
}

function FloatingLeaf({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh position={position} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
        <planeGeometry args={[0.3, 0.5]} />
        <meshStandardMaterial color="#059669" transparent opacity={0.6} side={2} />
      </mesh>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#10b981" />

        <Environment preset="park" />

        {/* Floating creatures and elements */}
        <FloatingBird position={[-2, 1, 0]} />
        <FloatingBird position={[3, -0.5, -1]} />
        <FloatingButterfly position={[0, 2, 1]} />
        <FloatingButterfly position={[-3, 0, 2]} />
        <FloatingButterfly position={[2, -1, -2]} />

        {/* Floating leaves */}
        <FloatingLeaf position={[-1, -2, 0]} />
        <FloatingLeaf position={[1.5, 1.5, -1]} />
        <FloatingLeaf position={[-2.5, -0.5, 1]} />
        <FloatingLeaf position={[0.5, -1.5, 2]} />

        {/* 3D Text */}
        <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
          <Text3D font="/fonts/Geist_Bold.json" position={[0, 0, 0]} size={0.5} height={0.1} curveSegments={12}>
            NEXUS
            <meshStandardMaterial color="#059669" />
          </Text3D>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
