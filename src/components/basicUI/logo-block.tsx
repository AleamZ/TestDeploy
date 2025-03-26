import React from 'react'
import Logo from '../../assets/LogoBluetooth.png'
import { Link } from 'react-router-dom';

const LogoBlock: React.FC = () => {
  return (
    <div className='logo-block-container'>
      <Link to="/">
        <img 
            className="logo-shop" 
          src={Logo}
        />
      </Link>  
    </div>
  )
}

export default LogoBlock;