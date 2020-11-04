import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMoneyCheck} from '@fortawesome/free-solid-svg-icons';

const Slider = ({ room }) => {
    const { isLike,img, price, title,subTitle, feature, isActive } = room;
    return (
        <div className={isActive ? 'carousel-item active' : 'carousel-item'}>
            <div className="slider-img">
                <img src={img} alt="room" />
                <div className="slider-room-price">
                    <div className="slider-room-price-btn">
                        <h3>{price.title} {price.amount} / <span>{price.duration}</span></h3>
                    </div>
                    <div className="slider-price-icon">
                        <FontAwesomeIcon icon={faMoneyCheck} />
                    </div>
                </div>
            </div>
            <div className="slider-txt-content">
                <h2>{title}</h2>
                <p>{subTitle}</p>
                <ul>
                    {
                        feature.map((list,idx)=> {
                            return <li key={idx}> <FontAwesomeIcon icon={list.icon} /> <span>{list.message}</span></li>
                        })
                    }
                </ul>
            </div>
            <div className={isLike ? 'slider-heart-icon active' : 'slider-heart-icon'}>
                <FontAwesomeIcon icon={faHeart}/>
            </div>
        </div>

    )
}

export default Slider;
