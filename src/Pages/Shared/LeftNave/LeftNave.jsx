import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNave = () => {
    const [category,setCategory]=useState([])
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data =>{
                setCategory(data) 
            })

    }, [])

    return (
        <div>
            <h2>All News</h2>
            {
                category.map(cat=><p key={cat.id}>
                    <Link to={`${cat.id}`}>{cat.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNave;