import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Book = () => {
    const { bedType } = useParams();
    return (
        <div className="text-center">
            <h3>Let's book a <b style={{ color: 'red' }}>{bedType}</b> room</h3>
            <p> Want a different room ? <Link to="/home" >Yes</Link> </p>
        </div>
    );
};

export default Book;