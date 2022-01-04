import CommonPage from './CommonPage';
import web from "../images/about.png"
const About = () => {
    return (
       <>
       <CommonPage 
       header1="welcome to about page"
       header2="We are the team of talented developer making websites"
       btnname="Contact Now"
       srcimg={web}
       visit="/services"

        />,
       </>
    );
};


export default About;
