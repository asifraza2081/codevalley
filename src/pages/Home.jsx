import CommonPage from './CommonPage';
import web from "../images/header2.png"
const Home = (props) => {
    return (
       <>
       <CommonPage 
        header1="Grow your business with "
        header2="We are the team of talented developer making websites"
        btnname="Get Started"
        srcimg={web}
        visit="/services"
       />,
       </>
    );
};


export default Home;
