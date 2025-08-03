import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    const {userId}=useParams()
  return (<>
    <div className='bg-gray-600 text-white text-3xl p-4'>Contact:{userId}</div>
    </>
  )
}

export default Contact