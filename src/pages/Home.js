import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCalendar, faFlask} from '@fortawesome/free-solid-svg-icons';
import Slider from '../components/Slider';

import roomOne from '../assets/images/room1.jpg';
import roomTwo from '../assets/images/room2.jpg';
import roomThree from '../assets/images/room3.jpg';

const Home = () => {
    const [roomDetails, setRoomDetails] = useState([
        {
            id: 1,
            isLike: false,
            img: roomOne,
            price: {
                title: 'NOK',
                amount: 4500,
                duration: 'per month'
            },
            title: 'Pen Nyoppusset Hybel',
            subTitle: 'Entire Place Apartment',
            feature: [
                { id: 1, message: '1.10.2020 undetermined',icon:faCalendar },
                { id: 2, message: 'Minimum stay: 0 month',icon:faFlask },
            ],
            isActive: true
        },
        {
            id: 1,
            isLike: true,
            img: roomTwo,
            price: {
                title: 'NOK',
                amount: 4500,
                duratiuon: 'per month'
            },
            title: 'Pen Nyoppusset Hybel',
            subTitle: 'Entire Place Apartment',
            feature: [
                { id: 1, message: '1.10.2020 undetermined',icon:faCalendar },
                { id: 2, message: 'Minimum stay: 0 month',icon:faFlask },
            ],
            isActive: false
        },
        {
            id: 3,
            isLike: false,
            img: roomThree,
            price: {
                title: 'NOK',
                amount: 4500,
                duratiuon: 'per month'
            },
            title: 'Pen Nyoppusset Hybel',
            subTitle: 'Entire Place Apartment',
            feature: [
                { id: 1, message: '1.10.2020 undetermined',icon:faCalendar },
                { id: 2, message: 'Minimum stay: 0 month',icon:faFlask },
            ],
            isActive: false
        }
    ]);
    return (
        <div className="container">
            <div id="roomSlider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        roomDetails.map((room, idx) => {
                            return <Slider key={idx} room={room} />
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#roomSlider" role="button" data-slide="prev">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </a>
                <a className="carousel-control-next" href="#roomSlider" role="button" data-slide="next">
                    <FontAwesomeIcon icon={faAngleRight} />
                </a>
            </div>
        </div>
    )
};

export default Home;