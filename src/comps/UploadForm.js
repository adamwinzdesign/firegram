import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/png', 'image/jpeg']

  const changeHandler = (e) => {
    let selected = e.target.files[0]

    // checking to see if there is a selected file because user could have selected and then cancelled, in which case we don't want that file to be included as selected.
    if(selected && types.includes(selected.type)) {
      setFile(selected)
      console.log(selected)
      setError('')
    } else {
      // resetting state if user selects a filetype that is not allowed
      setFile(null)
      setError('Please select a jpeg or png file!')
    }
  }

  return (
    <form>
      <input type='file' onChange={changeHandler} />
      <div className = 'output'>
        { error && (
          <div className = 'error'>
            {error}
          </div>
        )}
        { file && <div>{ file.name }</div>}
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}

export default UploadForm
