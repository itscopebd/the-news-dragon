import React from 'react';
import { useContext } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const News = () => {
    const newsData = useLoaderData();
    
    const { _id, details, image_url, title, category_id } = newsData;

  
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id
                    }`}><Button variant="primary">All news in this category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;