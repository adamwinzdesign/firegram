import React, { useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file) 

  // Firebase provides the url after the progress is 100, so we can use the url being provided to cause the progress bar to disappear once the file has completed uploading and a url has been provided.  
  useEffect(() => {
    if(url) {
      console.log(`url from firebase: ${url}`)
      setFile(null)
    }
  }, [url, setFile])

  return(
    <motion.div 
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    >
    </motion.div>
  )
}

export default ProgressBar
