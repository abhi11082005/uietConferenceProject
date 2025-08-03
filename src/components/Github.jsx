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
    <div>hello:{data.followers}</div>
    <img src='data.avatar_url' alt='get Picture'></img>
    </>
  )
}

export default Github