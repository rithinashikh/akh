import React from 'react';
import { PropagateLoader } from 'react-spinners';

function LoadingAnimation() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <PropagateLoader color="#3498db" loading={true} size={15} />
    </div>
  );
}

export default LoadingAnimation;