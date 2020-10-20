// originally from 'Build a photo gallery with react and firebase', which was posted to Traversy's youTube channel with Net Ninja as the guest instructor.
// https://www.youtube.com/watch?v=vUe91uOx7R0

import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm'
import ImageGrid from './comps/ImageGrid'
import Modal from './comps/Modal'

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </div>
  );
}

export default App;
