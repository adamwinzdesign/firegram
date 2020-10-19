import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  // snapshot runs once on load, but it also listens for changes to the online firestore collection.  Because collection is a dependency, it will run every time the collection is updated.
  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents = []
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id})
        })
        setDocs(documents)
      })
    // returning unsub will act to unsubscribe from the collection if/when the component unmounts
    return () => unsub()
  }, [collection])

  return { docs }
}

export default useFirestore
