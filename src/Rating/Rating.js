import React, {useState, useEffect} from 'react';
import RatingCreate from './RatingCreate/RatingCreate';
import RatingCards from './RatingCards/RatingCards';
import RatingEdit from './RatingEdit/RatingEdit';
import './Rating.css';
import APIURL from '../helpers/environment';

const Rating = (props) => {

    const [cardData, setCardData] = useState([]);
    const [updateToggle, setUpdateToggle] = useState(false);
    const [reviewToUpdate, setReviewToUpdate] = useState({});

    const updateReview = (cardData) => {
        setReviewToUpdate(cardData);
    }
    
    const updateOn = () => {
        setUpdateToggle(true);
    }
    
    const updateOff = () => {
        setUpdateToggle(false);
    }
    

    const Refresh = () => {
        fetch(`${APIURL}/rating/allposts`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(
            (res) => res.json()
        ).then((rating) => {
            setCardData(rating);
        })
    }

    useEffect(() => {
        Refresh();
    }, []);

    return(
        <div>
            <div>
            <RatingCreate token={props.token} Refresh={Refresh}/>
            </div>
            <br/>
            <div className='mainDiv' idName='cards'>
            <RatingCards cardData={cardData} Refresh={Refresh} token={props.token} updateReview={updateReview} updateOn={updateOn}/>
            {updateToggle ? <RatingEdit reviewToUpdate={reviewToUpdate} updateOff={updateOff} token={props.token} Refresh={Refresh}/> : <div></div>}
            </div>
        </div>
    )
}

export default Rating;