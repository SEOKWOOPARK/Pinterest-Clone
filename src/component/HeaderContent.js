import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button2 from './Button2';


const HeaderContent = (props) => {
  return (
    <div className="headerContent">
      <div className="headerIcon1">
        <Link to="/">
          <img
            src={props.imgsrc1}
            alt="pinterest_from_icons8"
            width="auto"
            height="30px"
          />
        </Link>
      </div>
      <div className="btn">
        <Link to="/">
          <Button2 buttonName="홈" />
        </Link>
        <Link to="/following">
          <Button2 buttonName="팔로잉" />
        </Link>
      </div>
      <input className="search" type="text" />
      <div className="headerIcon2">
        <ul>
          <li>
            <img src={props.imgsrc2} alt="alram_from_flaticon" width="auto" height="30px" />
          </li>
          <li>
            <img src={props.imgsrc3} alt="notification_from_flaticon" width="auto" height="30px" />
          </li>
          <li>
            <img src={props.imgsrc4} alt="profile_from_flaticon" width="auto" height="30px" />
          </li>
        </ul>

        {/* <img src={props.imgsrc2} alt="alram_from_flaticon" width="auto" height="36px" />
        <img src={props.imgsrc3} alt="notification_from_flaticon" width="auto" height="36px" />
        <img src={props.imgsrc4} alt="profile_from_flaticon" width="auto" height="36px" /> */}
      </div>
    </div>
  );
};

export default HeaderContent;
