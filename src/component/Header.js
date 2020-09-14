import React from 'react';
import Button1 from './Button1';

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">마음에 들지 않는 내용이 표시되나요? 홈피드를 수정 해보세요!</div>

      <div className="headerButton">
        <Button1 buttonName="나중에" />
        <Button1 buttonName="내 홈피드 수정" />
      </div>
    </div>
  );
};

export default Header;
