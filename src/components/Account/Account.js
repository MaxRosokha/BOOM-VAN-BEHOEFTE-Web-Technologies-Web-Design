import React, { useState } from 'react';
import Header from '../Header/header';
import '../../Account.css';
import profileImage from '../../image/Ellipse 3.png';
import Discount1 from '../../image/Group 39.png';
import Discount2 from '../../image/Group 39.png';
import Discount3 from '../../image/Group 39.png';

const Account = () => {
  const [showCoupons, setShowCoupons] = useState(false);

  const user = {
    name: 'Max Rosokha',
    location: 'Ukraine',
    status: 'Available for hire',
    coupons: [
      { discount: '10%', code: 'FLAT10', validTill: '28th June 2023', image: Discount1 },
      { discount: '10%', code: 'FLAT10', validTill: '28th June 2023', image: Discount2 },
      { discount: '10%', code: 'FLAT10', validTill: '28th June 2023', image: Discount3 },
    ],
    profileImage: profileImage,
  };

  const toggleCoupons = () => {
    setShowCoupons(!showCoupons);
  };

  return (
    <div>
      <Header />
      <div className="account-container">
        <header className="account-header">
          <img src={user.profileImage} alt={`${user.name}'s profile`} className="profile-image" />
          <h1 className="user-name">{user.name}</h1>
          <p className="user-location">{user.location}</p>
          <p className="user-status">{user.status}</p>
          <button className="coupon-button" onClick={toggleCoupons}>
            My coupons {showCoupons ? '▲' : '▼'}
          </button>
        </header>

        {showCoupons && (
          <div className="coupons-container">
            {user.coupons.map((coupon, index) => (
              <div key={index} className="coupon">
                <img src={coupon.image} alt={`Coupon ${index + 1}`} className="coupon-image" />
                <p className="discount">{coupon.discount} Off</p>
                <p className="code">Code: {coupon.code}</p>
                <p className="validity">Valid till {coupon.validTill}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
