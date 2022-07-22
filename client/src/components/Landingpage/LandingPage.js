import './LandingPage.css';
import { NavLink } from 'react-router-dom';

const LandingPage = ()=>{

    return (
        <div className='wrapper'>
            <div className='content'>
                <h2>Instagram Clone</h2>
                <NavLink className='btn' to='/postview'>LOG IN</NavLink>
            </div>
        </div>
    )
}
export default LandingPage;