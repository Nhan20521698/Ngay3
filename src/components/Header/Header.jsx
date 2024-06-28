import './Header.css';
import Logo from '../../assets/images/logo.png';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    return(
        <div id='header' className=''>
            <div className="partner">
                <p className='partner-name'>Liquidity Services Brands</p>
                <div className="list-partner">
                    <ul>
                        <li>ALLSURPLUS</li>
                        <li>GovDeals</li>
                        <li>machinio</li>
                        <li>Liquidation.com</li>
                        <li>bid4assets</li>
                    </ul>
                </div>
            </div>
            <div className='nav'>
                <div className='navbar'>
                    <ul>
                        <li>About Us</li>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>View Canada</li>
                    </ul>
                </div>
                <div className='navbar'>
                    <div></div>
                    <ul>
                        <li>Sign In</li>
                        <li>Register</li>
                    </ul>
                </div>
            </div>
            <div className='search-area'>
                <img src={Logo} alt='Logo'/>
                <div className='search'>
                    <div className='search-group'>
                        <input type='text' className='input' placeholder='Search Assets'/>
                        <i class='bx bx-search search-icon'></i>
                    </div>
                    <span className='search-advanced'>Advanced Search</span>
                </div>
            </div>

        </div>
    )
}

export default Header;