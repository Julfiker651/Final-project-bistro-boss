import React, { useEffect, useState } from 'react';

const usemenu = () => {
    const [menu,setmenu]=useState([])
    const [loading,setloaading]=useState(true)
    useEffect(()=>{
        fetch("http://localhost:3000/foods")
        .then(res=>res.json())
        .then(data=>{
            setloaading(true)
            setmenu(data)
            setloaading(false)
        })
    },[])
    return [menu,loading]
};

export default usemenu;