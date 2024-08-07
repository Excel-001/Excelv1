import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import "./App.css";
// Sample coordinates with location names
const coordinates = [
  { id: 1, lat: 51.1657, lon: 10.4515, name: 'Germany' },
  { id: 2, lat: 35.8617, lon: 104.1954, name: 'China' },
  { id: 3, lat: -25.2744, lon: 133.7751, name: 'Australia' },
  { id: 4, lat: 37.0902, lon: -95.7129, name: 'USA' },
  { id: 5, lat: 0.5937, lon: 78.9629, name: 'India' },

  // Add more coordinates as needed
];

function Globe({ darkMode }) {
  const mountRef = useRef(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Define gradient shader material
    const vertexShader = `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec3 vNormal;
      uniform vec3 color1;
      uniform vec3 color2;
      void main() {
        float gradient = 0.5 * (vNormal.y + 1.0); // Adjust gradient as needed
        vec3 color = mix(color1, color2, gradient);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Choose colors based on the theme
    const lightModeColors = { color1: '#120720', color2: '#da22ff' };
    const darkModeColors = { color1: '#0gt', color2: '#555555' };
    const colors = darkMode ? darkModeColors : lightModeColors;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        color1: { value: new THREE.Color(colors.color1) },
        color2: { value: new THREE.Color(colors.color2) }
      }
    });

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Convert lat/lon to 3D coordinates
    const convertLatLonToVector3 = (lat, lon, radius = 1) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      const x = -radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      return new THREE.Vector3(x, y, z);
    };

    // Add location tags as children of the globe
    coordinates.forEach(coord => {
      const { id, lat, lon, name } = coord;
      const position = convertLatLonToVector3(lat, lon, 1.02); // Slightly outside the globe surface
      const spriteMaterial = new THREE.SpriteMaterial({
        map: new THREE.TextureLoader().load('https://images.ctfassets.net/zlhl2y58oyef/uR8Nuf7Ly0L162INa7p44/0a310fd400d19c55b1c5287f4d722547/SpareParts_7030.jpg'),
        transparent: true,
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(position);
      sprite.scale.set(0.1, 0.1, 0.1); // Adjust the size of the location tags
      sprite.userData = { name }; // Store the name in the sprite's userData
      globe.add(sprite); // Add sprite as a child of the globe

      // Hover detection
      sprite.onPointerOver = () => {
        setHoveredLocation(name);
      };
      sprite.onPointerOut = () => {
        setHoveredLocation(null);
      };
    });

    camera.position.z = 3;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, [darkMode]); // Re-render when darkMode changes

  return (
    <div ref={mountRef} style={{ width: '90vw', height: '100vh', position: 'relative' }}>
      {hoveredLocation && <div className="tooltip">{hoveredLocation}</div>}
    </div>
  );
}

export default Globe;
