
import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import './Friends.css';

const Friends = (props) => {
    const {name,email,id}=props.friend;
    const navigate = useNavigate();
    const handleClick=(friendId)=>{
        const url=`/friend/${friendId}`;
        navigate(url);


    }
    return (
        <div className='block'>
        <h2>Name:{name}</h2>
        <h4>Email:{email}</h4>
        <Link to={`/friend/${id}`}> Detail:{id} </Link>
        <button onClick={()=>handleClick(id)}>Click Me</button>
            
        </div>
    );
};

export default Friends;