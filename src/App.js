// originally from 'Build a photo gallery with react and firebase', which was posted to Traversy's youTube channel with Net Ninja as the guest instructor.
// https://www.youtube.com/watch?v=vUe91uOx7R0

import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
