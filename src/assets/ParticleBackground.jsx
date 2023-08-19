import particleConfig from './ParticleConfig'
import Particles from 'react-particles'
import { useCallback } from 'react';
import {loadFull} from 'tsparticles'
import './tsparticles.css'


export default function ParticleBackground (){
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback((container) => {
    console.log(container);
}, []);

  return (
    <Particles
     id="tsparticles" 
     options={particleConfig} 
     init={particlesInit}
     loaded={particlesLoaded}
     >
     </Particles>
  )
}