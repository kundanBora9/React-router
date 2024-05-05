import React, { useEffect } from 'react'

function GitHub() {
    const [data,setData]=React.useState([])
    useEffect( ()=>{
        fetch('https://api.github.com/users/kundanbora9')
        .then((response) => response.json()) 
        .then(data=>{
            console.log(data)
            setData(data)})

    } ,[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>GitHub folower:{data.
        followers}
        <img src={data.avatar_url} width={300} alt='profile pic'/>
         </div>
  )
}

export default GitHub