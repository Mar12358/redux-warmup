import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <dov className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </dov>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;