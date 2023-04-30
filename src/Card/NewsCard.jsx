import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaRegEye, FaRegStar, FaShare, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {

    const { _id, details, image_url, title, author, rating, total_view } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-3'>
                    <Image style={{ height: "40px" }} src={author.img} roundedCircle />
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <small>{moment(author?.published_date).format("D/MM/YYYY")}</small>
                    </div>
                </div>

                <div className='d-flex gap-4'>
                    <h2 size={30}><FaRegBookmark></FaRegBookmark></h2>
                    <h2><FaShare></FaShare></h2>
                </div>

            </Card.Header>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)} <Link to={`/news/${_id}`}>Read More</Link></>

                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">
                <div className='d-flex justify-content-between align-items-center'>
                    <div>

                        <Rating
                            placeholderRating={rating?.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                    <div>
                        <p><FaRegEye></FaRegEye>  {total_view}</p>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;