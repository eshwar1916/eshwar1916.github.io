import React from 'react';
import Particles from 'react-particles-js';

// Configuration for particles
const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    shape: {
      type: 'image',
      image: [
        { src: './portfolio/assest/apple.webp', width: 32, height: 32 },
        { src: './portfolio/assest/banana.png', width: 32, height: 32 },
        { src: './portfolio/assest/strawberry.webp', width: 32, height: 32 },
      ],
    },
    color: {
      value: '#ffffff',
    },
    opacity: {
      value: 1,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 16,
      anim: {
        enable: false,
        speed: 5,
        size_min: 0.1,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 3000,
        rotateY: 3000,
      },
    },
    line_linked: {
      enable: false,
    },
    collisions: {
      enable: true,
      mode: 'bounce',
    },
    links: {
      enable: false,
    },
  },
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      bubble: {
        distance: 400,
        duration: 2,
        size: 40,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  retina_detect: true,
};

const ReactParticles = () => {
  return <Particles params={particlesConfig} />;
};

export default ReactParticles;
