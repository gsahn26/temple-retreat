export default function TempleStructures() {
  return (
    <group>
      {/* ground */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#8d7a5c" />
      </mesh>

      {/* stone path from gate to hall */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.01, -2]} receiveShadow>
        <planeGeometry args={[3, 20]} />
        <meshStandardMaterial color="#b7ab8e" />
      </mesh>

      {/* entrance gate (torii-like) */}
      <group position={[0, 0, 10]}>
        <mesh position={[-2.2, 2, 0]} castShadow>
          <boxGeometry args={[0.4, 4, 0.4]} />
          <meshStandardMaterial color="#7a3b2e" />
        </mesh>
        <mesh position={[2.2, 2, 0]} castShadow>
          <boxGeometry args={[0.4, 4, 0.4]} />
          <meshStandardMaterial color="#7a3b2e" />
        </mesh>
        <mesh position={[0, 4.1, 0]} castShadow>
          <boxGeometry args={[5.2, 0.4, 0.5]} />
          <meshStandardMaterial color="#5c2c22" />
        </mesh>
        <mesh position={[0, 3.5, 0]} castShadow>
          <boxGeometry args={[4.6, 0.3, 0.4]} />
          <meshStandardMaterial color="#5c2c22" />
        </mesh>
      </group>

      {/* Main Hall */}
      <group position={[0, 0, -15]}>
        {/* floor platform */}
        <mesh position={[0, 0.3, 0]} receiveShadow>
          <boxGeometry args={[11, 0.6, 9]} />
          <meshStandardMaterial color="#d9c9a3" />
        </mesh>
        {/* back + side walls */}
        <mesh position={[0, 3, -4.4]} castShadow receiveShadow>
          <boxGeometry args={[11, 5.4, 0.4]} />
          <meshStandardMaterial color="#9c3b2e" />
        </mesh>
        <mesh position={[-5.4, 3, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.4, 5.4, 9]} />
          <meshStandardMaterial color="#9c3b2e" />
        </mesh>
        <mesh position={[5.4, 3, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.4, 5.4, 9]} />
          <meshStandardMaterial color="#9c3b2e" />
        </mesh>
        {/* front columns */}
        {[-4.5, -1.5, 1.5, 4.5].map((x) => (
          <mesh key={x} position={[x, 2.9, 4.4]} castShadow>
            <cylinderGeometry args={[0.22, 0.22, 5.6, 10]} />
            <meshStandardMaterial color="#7a2e22" />
          </mesh>
        ))}
        {/* roof */}
        <mesh position={[0, 5.9, 0]} castShadow>
          <boxGeometry args={[12.5, 0.5, 10.5]} />
          <meshStandardMaterial color="#2e3b30" />
        </mesh>
        <mesh position={[0, 6.6, 0]} rotation-x={0}>
          <coneGeometry args={[8.5, 1.8, 4]} />
          <meshStandardMaterial color="#223228" />
        </mesh>

        {/* altar */}
        <mesh position={[0, 1.1, -3.3]} castShadow>
          <boxGeometry args={[2.4, 1, 0.8]} />
          <meshStandardMaterial color="#5c3a22" />
        </mesh>
        <mesh position={[0, 1.9, -3.3]} castShadow>
          <sphereGeometry args={[0.45, 16, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.3} />
        </mesh>
        {/* cushion for bowing */}
        <mesh position={[0, 0.65, -0.5]} receiveShadow>
          <cylinderGeometry args={[0.6, 0.6, 0.12, 20]} />
          <meshStandardMaterial color="#8a2e2e" />
        </mesh>
      </group>

      {/* Private Room */}
      <group position={[10, 0, -5]}>
        <mesh position={[0, 0.25, 0]} receiveShadow>
          <boxGeometry args={[6, 0.5, 6]} />
          <meshStandardMaterial color="#cbb88f" />
        </mesh>
        <mesh position={[0, 2.5, -2.8]} castShadow receiveShadow>
          <boxGeometry args={[6, 4.5, 0.3]} />
          <meshStandardMaterial color="#a68a5e" />
        </mesh>
        <mesh position={[-2.85, 2.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 4.5, 6]} />
          <meshStandardMaterial color="#a68a5e" />
        </mesh>
        <mesh position={[2.85, 2.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.3, 4.5, 6]} />
          <meshStandardMaterial color="#a68a5e" />
        </mesh>
        <mesh position={[0, 4.9, 0]} castShadow>
          <boxGeometry args={[6.6, 0.4, 6.6]} />
          <meshStandardMaterial color="#2e3b30" />
        </mesh>
        {/* sleeping mat */}
        <mesh position={[0, 0.55, 0]} receiveShadow>
          <boxGeometry args={[2.2, 0.15, 3.2]} />
          <meshStandardMaterial color="#e8e0cc" />
        </mesh>
        {/* small window light */}
        <pointLight position={[0, 3.5, 0]} intensity={8} color="#ffdca8" distance={8} />
      </group>

      {/* sweeping spot: broom + leaves */}
      <group position={[-8, 0, 5]}>
        <mesh position={[0.6, 1, 0]} rotation-z={0.4} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 1.8, 8]} />
          <meshStandardMaterial color="#6b4a2e" />
        </mesh>
        <mesh position={[0.85, 0.15, 0]} rotation-z={0.4} castShadow>
          <coneGeometry args={[0.18, 0.4, 8]} />
          <meshStandardMaterial color="#c9a85e" />
        </mesh>
        {[...Array(6)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i) * 1.2,
              0.02,
              Math.cos(i * 1.7) * 1.2,
            ]}
            rotation-x={-Math.PI / 2}
          >
            <circleGeometry args={[0.15, 6]} />
            <meshStandardMaterial color="#b5742e" />
          </mesh>
        ))}
      </group>

      {/* decorative trees */}
      {[
        [-12, 0, -12],
        [12, 0, -14],
        [-14, 0, 2],
        [14, 0, 6],
        [-6, 0, 12],
        [6, 0, 14],
      ].map(([x, , z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 1, 0]} castShadow>
            <cylinderGeometry args={[0.15, 0.2, 2, 8]} />
            <meshStandardMaterial color="#5c4530" />
          </mesh>
          <mesh position={[0, 2.4, 0]} castShadow>
            <sphereGeometry args={[1.1, 10, 10]} />
            <meshStandardMaterial color="#3f5c3a" />
          </mesh>
        </group>
      ))}
    </group>
  );
}
