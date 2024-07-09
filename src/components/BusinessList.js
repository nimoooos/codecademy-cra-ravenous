import React from 'react';
import Business from './Business';
import { useState } from 'react';

export default function BusinessList(props) {
    /**
     * @param props: {businesses: an array of Business objects}
     */
    const [businesses, setBusinesses] = useState(props.businesses);


    // console.log(businesses);
    return (
        <>

            {
                businesses.map((x) => {
                    console.log(x)
                    return <Business image={x.image} name={x.name} address={x.address} city={x.city} state={x.state} zipcode={x.zipcode} category={x.category} rating={x.rating} review_count={x.review_count} />
                })
            }

        </>
    )
}