import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const MidCards = () => {
    return(
        <div className="midCards">
            <CardBanner/>
            <CardContent/>
        </div>
    );

}
export default MidCards;
