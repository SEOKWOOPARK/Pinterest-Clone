import React from 'react';

const HeaderIcon = (props) => {
  return (
    <div className="HeaderContent">
      <div className="headerIcon2">
        <img src={props.imgsrc2} alt="alram_from_flaticon" width="auto" height="36px" />
        <img src={props.imgsrc3} alt="notification_from_flaticon" width="auto" height="36px" />
        <img src={props.imgsrc4} alt="profile_from_flaticon" width="auto" height="36px" />
      </div>
    </div>
  );
};

export default HeaderIcon;
