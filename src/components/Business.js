import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Business({
    image = "https://via.placeholder.com/150",
    name = "Default Restaurant Name",
    address = "0000 Street St",
    city = "City",
    state = "ST",
    zipcode = "00000",
    category = "defaultcategory",
    rating = 4.0,
    review_count = 100
}

) {
    return (
        <>
            <Card className='m-3 border border-primary d-inline-block' style={{ width: '20rem' }}>
                <Card.Img src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{category} {rating} {review_count} </Card.Text>
                    <Card.Footer>{address}, {city}, {state} {zipcode}</Card.Footer>
                </Card.Body>
            </Card>
        </>
    )
}
