import React, { useEffect } from 'react';
import Particles from 'react-particles-js';

const ReactParticles = () => {
  useEffect(() => {
    console.log('ReactParticles component mounted');
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.8,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 5,
        direction: 'top',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      line_linked: {
        enable: false,
      },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };
  console.log('Particles configuration:', particlesConfig);

  return (
    <div style={{ position: 'absolute', bottom: '49rem', left: 0, width: '100%', height: '100%' }}>
      {console.log('Rendering Particles component')}
      <Particles params={particlesConfig} />
    </div>
  );
};

export default ReactParticles;
