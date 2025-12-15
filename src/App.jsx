import React from "react";
import Particles from "./components/Particles";

const App = () => {
  return (

    <div className="bg-black flex items-center justify-center min-h-screen">

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={500}
    particleSpread={10}
    speed={0.3}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
    </div>

  );
};

export default App;
