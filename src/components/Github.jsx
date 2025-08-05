import React, { useEffect ,useState} from 'react'

const Github = () => {
    const [data,setData]=useState([]) 
    useEffect (() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(Response => Response.json())
        .then(data => {
                setData(data)
                console.log(data)
        })
    }, [])
    
  return (<>
    <div className="mx-auto w-full max-w-7xl">
       <div className="bg-white py-10  text-center text-black border-b shadow-sm rounded-lg">
        
       </div>
    </div>
    </>
  )
}

export default Github