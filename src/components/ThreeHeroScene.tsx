import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroSceneProps {
  className?: string;
}

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;
    const isMobile = window.innerWidth < 768;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 21;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Neural Network Group
    const group = new THREE.Group();
    scene.add(group);

    // Dynamic Nodes Calculation (Fibonacci sphere distribution)
    const particleCount = isMobile ? 80 : 140;
    const coords: THREE.Vector3[] = [];
    const radius = 9.2;

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      coords.push(new THREE.Vector3(x, y, z));
    }

    // Glowing Node Spheres
    const nodeGeo = new THREE.SphereGeometry(0.18, 10, 10);
    const nodeMatCyan = new THREE.MeshBasicMaterial({ color: 0x00f5ff });
    const nodeMatViolet = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    const nodeMatWhite = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const nodeMeshGroup = new THREE.Group();
    coords.forEach((pos, idx) => {
      const mat = idx % 3 === 0 ? nodeMatCyan : idx % 3 === 1 ? nodeMatViolet : nodeMatWhite;
      const node = new THREE.Mesh(nodeGeo, mat);
      node.position.copy(pos);
      nodeMeshGroup.add(node);
    });
    group.add(nodeMeshGroup);

    // Neural Synapse Connecting Lines
    const maxDistance = isMobile ? 3.8 : 4.2;
    const linePositions: number[] = [];
    for (let i = 0; i < coords.length; i++) {
      for (let j = i + 1; j < coords.length; j++) {
        const dist = coords[i].distanceTo(coords[j]);
        if (dist < maxDistance) {
          linePositions.push(coords[i].x, coords[i].y, coords[i].z);
          linePositions.push(coords[j].x, coords[j].y, coords[j].z);
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(lines);

    // Inner Core Pulsing Lattice
    const coreGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Ambient Floating Data Particles
    const starCount = isMobile ? 150 : 320;
    const starGeo = new THREE.BufferGeometry();
    const starPos: number[] = [];
    for (let k = 0; k < starCount; k++) {
      starPos.push(
        (Math.random() - 0.5) * 55,
        (Math.random() - 0.5) * 55,
        (Math.random() - 0.5) * 35
      );
    }
    starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.22,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (e.clientX - windowHalfX) * 0.0007;
      targetY = (e.clientY - windowHalfY) * 0.0007;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Lerp mouse target
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate group
      group.rotation.y = time * 0.12 + mouseX * 2.0;
      group.rotation.x = time * 0.08 + mouseY * 2.0;

      // Pulse inner core
      const pulseScale = 1.0 + Math.sin(time * 2.5) * 0.08;
      coreMesh.scale.set(pulseScale, pulseScale, pulseScale);
      coreMesh.rotation.y = -time * 0.15;

      // Drift star particles
      starField.rotation.y = -time * 0.025;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      nodeGeo.dispose();
      nodeMatCyan.dispose();
      nodeMatViolet.dispose();
      nodeMatWhite.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      starGeo.dispose();
      starMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full min-h-[420px] md:min-h-[500px] flex items-center justify-center ${className}`}
      aria-label="Interactive 3D AI Neural Network Visualization"
    />
  );
};
