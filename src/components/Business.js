import React from 'react';
import Card from 'react-bootstrap/Card'

export default function Business({
    image = "https://via.placeholder.com/150",
    name = "Default Restaurant Name",
    address = "123 Main St",
    city = "Wahiawa",
    state = "HI",
    zipcode = "96786",
    category = "Chinese",
    rating = 4.0,
    review_count = 100
}

) {
    return (
        <>
            <Card className='border border-primary' style={{ width: '20rem' }}>
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
