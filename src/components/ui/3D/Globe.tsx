import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Line, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points on a sphere for network nodes
const nodesCount = 50;
const radius = 2.1;
const nodes = Array.from({ length: nodesCount }).map(() => {
    const phi = Math.acos(-1 + (2 * Math.random()));
    const theta = Math.sqrt(nodesCount * Math.PI) * phi;
    return new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
    );
});

const NetworkLines = () => {
    const lines: JSX.Element[] = [];
    // Simple logic to connect close nodes
    for (let i = 0; i < nodesCount; i++) {
        for (let j = i + 1; j < nodesCount; j++) {
            if (nodes[i].distanceTo(nodes[j]) < 1.5) {
                lines.push(
                    <Line
                        key={`${i}-${j}`}
                        points={[nodes[i], nodes[j]]}
                        color="#00f0ff"
                        lineWidth={0.5}
                        opacity={0.3}
                        transparent
                    />
                );
            }
        }
    }
    return <>{lines}</>;
};

const RotatingGlobe = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.002;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Inner Core */}
            <Sphere args={[2, 64, 64]}>
                <MeshDistortMaterial
                    color="#050505"
                    emissive="#b026ff"
                    emissiveIntensity={0.2}
                    wireframe
                    distort={0.1}
                    speed={2}
                />
            </Sphere>

            {/* Outer Glow / Ocean */}
            <Sphere args={[2.05, 32, 32]}>
                <meshStandardMaterial
                    color="#000000"
                    transparent
                    opacity={0.8}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>

            {/* Network Nodes */}
            <Points positions={new Float32Array(nodes.flatMap(v => [v.x, v.y, v.z]))}>
                <PointMaterial
                    transparent
                    color="#39ff14"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>

            <NetworkLines />
        </group>
    );
};

export const GlobeCanvas: React.FC = () => {
    return (
        <div className="w-full h-full min-h-[400px] relative pointer-events-none md:pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-cyber-bg z-10 pointer-events-none"></div>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b026ff" />
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
                <RotatingGlobe />
            </Canvas>
        </div>
    );
};
