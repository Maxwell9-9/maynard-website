import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';

function TrumpetModel() {
    return (
        <group rotation={[0.2, -0.8, 0]} position={[0, -0.2, 0]}>
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.07, 0.07, 2.3, 48]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.25} />
            </mesh>

            <mesh position={[1.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <coneGeometry args={[0.48, 1, 48, 1, true]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.2} side={2} />
            </mesh>

            <mesh position={[-1.18, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.1, 0.05, 0.45, 32]} />
                <meshStandardMaterial color="#e6c45c" metalness={1} roughness={0.2} />
            </mesh>

            <mesh position={[-0.2, 0.26, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.6, 32]} />
                <meshStandardMaterial color="#c8a03a" metalness={1} roughness={0.25} />
            </mesh>
            <mesh position={[0.05, 0.26, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.6, 32]} />
                <meshStandardMaterial color="#c8a03a" metalness={1} roughness={0.25} />
            </mesh>
            <mesh position={[0.3, 0.26, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 0.6, 32]} />
                <meshStandardMaterial color="#c8a03a" metalness={1} roughness={0.25} />
            </mesh>

            <mesh position={[-0.2, 0.62, 0]}>
                <cylinderGeometry args={[0.12, 0.12, 0.08, 32]} />
                <meshStandardMaterial color="#f2d57d" metalness={1} roughness={0.18} />
            </mesh>
            <mesh position={[0.05, 0.62, 0]}>
                <cylinderGeometry args={[0.12, 0.12, 0.08, 32]} />
                <meshStandardMaterial color="#f2d57d" metalness={1} roughness={0.18} />
            </mesh>
            <mesh position={[0.3, 0.62, 0]}>
                <cylinderGeometry args={[0.12, 0.12, 0.08, 32]} />
                <meshStandardMaterial color="#f2d57d" metalness={1} roughness={0.18} />
            </mesh>

            <mesh position={[0.55, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.2, 0.05, 24, 64, Math.PI]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.25} />
            </mesh>
        </group>
    );
}

export default function TrumpetScene() {
    return (
        <div style={{ width: '100%', height: 320, borderRadius: 16, overflow: 'hidden' }}>
            <Canvas gl={{ alpha: true }} camera={{ position: [0, 1.3, 3.2], fov: 45 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[3, 4, 3]} intensity={1.8} />
                <directionalLight position={[-2, 2, -3]} intensity={0.7} color="#8aa2c8" />
                <TrumpetModel />
                <ContactShadows position={[0, -0.95, 0]} opacity={0.45} scale={6} blur={1.6} far={3} />
                <Environment preset="city" />
                <OrbitControls enablePan={false} minDistance={2.1} maxDistance={5} autoRotate autoRotateSpeed={1.4} />
            </Canvas>
        </div>
    );
}
