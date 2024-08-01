import React from 'react';
import Particles from 'react-particles-js';
import './Reactparticlesforlogin.css'
const ReactParticles = () => {
  const particlesConfig = {
    particles: {
      number: {
        value: 20,
      },
      shape: {
        type: 'image',
        image: {
            
          src: './assest/as.png',
          width: 100,
          height: 100,
        },
        },
      size: {
        value: 20,
      },
      move: {
        enable: true,
        speed: 1,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
      },
    },
    retina_detect: true,
  };

  const containerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'darkslategrey', // Light blue background color
     // Ensure it stays behind other content
  };

  return (
    <div style={containerStyle}>
      <Particles params={particlesConfig} />
    </div>
  );
};

export default ReactParticles;
