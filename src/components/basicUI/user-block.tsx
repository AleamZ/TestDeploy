import React from "react";
import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface UserBlockProps {
  avatar?: string;
  accountname?: string;
  isLoggedIn?: boolean;
  loginRoute?: string;
  signupRoute?: string;
}

const UserBlock: React.FC<UserBlockProps> = ({
  avatar = "",
  accountname = "đăng nhập/ đăng kí",
  isLoggedIn = false,
  loginRoute = "login",
  signupRoute = "register",
}) => {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <div className="user-block-container">
      {isLoggedIn ? (
        <div className="user-block-info">
          <img src={avatar} alt="Avatar" className="user-block-avatar" />
          <span className="user-block-name">{accountname}</span>
        </div>
      ) : (
        <div className="user-block-login">
          <div className="user-block-icon">
            <IoPerson size={20} color="white" />
          </div>
          <div className="user-links">
            <span
              onClick={() => handleNavigation(loginRoute)}
              className="user-block-link"
            >
              Đăng nhập
            </span>
            <span className="user-block-desk">{" / "}</span>
            <span
              onClick={() => handleNavigation(signupRoute)}
              className="user-block-link"
            >
              Đăng ký
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBlock;
