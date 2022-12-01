import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const FriendDetail = () => {

    
    

   

    const {friendId}= useParams();
    const [user,setUser]=useState({});
    useEffect(()=>{

const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;

fetch(url)
.then(res=>res.json())
.then(data=>setUser(data))

    },[]);
    return (
        <div>
            
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
        </div>
    );
};

export default FriendDetail;