import { Link } from 'react-router-dom';
import Headshot from '../../assets/images/Headshot.jpg'
import './index.scss';
import Loader from 'react-loaders';

const Home = () => { 

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> 
                I'm Clayton<br />
                Computer Engineering student
                </h1>
                <h2>2nd year, University of British Columbia</h2>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                </Link>
            </div>
            <div className="headshot">
                <img src={Headshot} alt="clayton" width="35%" />
            </div>
        </div>
        <Loader type="ball-clip-rotate" />
        </>
    );
}

export default Home