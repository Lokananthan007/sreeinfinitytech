import './Ourservices.css'
import useGlobalScroll from "../animation/useGlobalScroll";

function Ourservices(){
    useGlobalScroll();
    return(
        <div id='Ourservices' data-animate="fade-in" data-delay="2">
            <h3 data-animate="fade-in" data-delay="2">OUR  SERVICES</h3>
            <p data-animate="fade-in" data-delay="2"><strong>SREE INFINITY TECH</strong> specializes in web development, software, mobile apps and digital marketing. 
            Our mission is to deliver innovative, reliable and high-quality solutions that empower businesses and drive growth. 
            We use cutting-edge technology to ensure that our services add value and make technology an asset for our clients.
            </p>
        </div>
    );
};
export default Ourservices ;