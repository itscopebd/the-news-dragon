import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../../Card/NewsCard';


const Category = () => {
    const {id}=useParams();
    const data=useLoaderData();
    return (
        <div>
            <h3>CateGory:{data.length}</h3>
            {
                data.map(news=><NewsCard news={news} key={news._id}></NewsCard>)
            }
        </div>
    );
};

export default Category;