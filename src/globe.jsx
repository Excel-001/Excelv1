import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import figma from './assets/figma.svg';
import './App.css';
import react1 from './assets/react.svg';
import figma1 from './assets/figma1.svg';
import tailwind from './assets/tailwind.svg';
import node from './assets/node.svg';
import html from './assets/html.svg';
import css from './assets/css.svg';
import javascript from './assets/javascript.svg';
import bootstrap from './assets/bootstrap.svg';

const coordinates = [
  { id: 1, lat: 51.1657, lon: 10.4515, name: 'Germany', img: html, link: 'https://example.com/germany' },
  { id: 2, lat: 35.8617, lon: 104.1954, name: 'China', img: react1, link: 'https://example.com/china' },
  { id: 3, lat: -25.2744, lon: 133.7751, name: 'Australia', img: figma1, link: 'https://example.com/australia' },
  { id: 4, lat: 37.0902, lon: -95.7129, name: 'USA', img: tailwind, link: 'https://example.com/usa' },
  { id: 5, lat: -0.5937, lon: 20.9629, name: 'India', img: node, link: 'https://example.com/india' },
  { id: 6, lat: 0.5937, lon: -78.9629, name: '', img: css, link: 'https://example.com/india' },
  { id: 7, lat: -0.5937, lon: -128.9629, name: '', img: bootstrap, link: 'https://example.com/india' },
  { id: 8, lat: -34.4937, lon: 78.9629, name: '', img: javascript, link: 'https://example.com/india' },
 
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

    // Handle window resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

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
    const sprites = [];
    coordinates.forEach(coord => {
      const { id, lat, lon, name, img, link } = coord;
      const position = convertLatLonToVector3(lat, lon, 1.04); // Slightly outside the globe surface
      const textureLoader = new THREE.TextureLoader();
      const spriteMaterial = new THREE.SpriteMaterial({
        map: textureLoader.load(img),
        transparent: true,
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.copy(position);
      sprite.scale.set(0.1, 0.1, 0.1); // Adjust the size of the location tags
      sprite.userData = { name, link }; // Store the name and link in the sprite's userData
      globe.add(sprite); // Add sprite as a child of the globe
      sprites.push(sprite); // Store sprite for raycasting
    });

    // Raycaster for detecting mouse interactions
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event) => {
      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      // Update the raycaster with the camera and mouse position
      raycaster.updateMatrixWorld();
      raycaster.setFromCamera(mouse, camera);

      // Find intersected objects
      const intersects = raycaster.intersectObjects(sprites);

      if (intersects.length > 0) {
        const intersected = intersects[0].object;
        setHoveredLocation(intersected.userData.name);
      } else {
        setHoveredLocation(null);
      }
    };

    const handleMouseClick = (event) => {
      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      // Update the raycaster with the camera and mouse position
      raycaster.updateMatrixWorld();
      raycaster.setFromCamera(mouse, camera);

      // Find intersected objects
      const intersects = raycaster.intersectObjects(sprites);

      if (intersects.length > 0) {
        const intersected = intersects[0].object;
        window.open(intersected.userData.link, '_blank');
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

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
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, [darkMode]); // Re-render when darkMode changes

  return (
    <div ref={mountRef} className="relative w-[100vw] h-52  lg:h-[100vh]">
      {hoveredLocation && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md shadow-lg">
          {hoveredLocation}
        </div>
      )}
    </div>
  );
}

export default Globe;
