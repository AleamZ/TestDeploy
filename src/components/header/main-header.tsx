import CartBlock from '../basicUI/cart-block'
import InputSearch from '../basicUI/input-search'
import LogoBlock from '../basicUI/logo-block'
import StoreLocation from '../basicUI/store-location'
import UserBlock from '../basicUI/user-block'

const MainHeader = () => {
  return (
    <div className="main-header-container">
      <div className='main-header-subContainer'>
        <div className='main-header-fixed'>
          <LogoBlock />
          <StoreLocation />
        </div>
        <div className='main-header-not-fixed'>
          <InputSearch  />
          <UserBlock />
          <CartBlock />
        </div>
      </div>
    </div>
  )
}

export default MainHeader