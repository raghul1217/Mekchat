import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">

        {/* left Side: Contact Numbers and Icons */}
        <div className="left-side">
        <h4>Contact Us</h4>
          <div className="contact-numbers">
            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Rajkumar</p>
              </div>
              <div className="align2">
              <p>: 7094024969</p>
              </div>
            </div>

            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Raajeshwaran</p>
              </div>
              <div className="align2">
              <p>: 6369488560</p>
              </div>
            </div>

            <div className="people-contact">
              <div className="align1">
              <i class="fas fa-phone"></i>
              <p>Sukesh</p>
              </div>
              <div className="align2">
              <p>: 9360307319</p>
              </div>
            </div>
            
          </div>

          <div className="social-icons">
            <div className="social-icons-div">
            <a href="https://www.instagram.com/progeni25/profilecard/?igsh=d280emlncG82eXN3" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram}/>
            </a>
            </div>
            <div className="social-icons-div">
            <a href="https://wa.me/918220634803" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            </div>
            <div className="social-icons-div">
            <a href="mailto:progeni25.0cse@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            </div>
          </div>
        </div>

        {/* Center: Quick Links Section */}
        <div className="center-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a to="#home">Home</a></li>
            <li><a href="#clubs" >Clubs</a></li>
            <li><a href="#events" >Events</a></li>
            <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSe2pJ-8mqd92tvxI4Dv_883YsJ38sFp7gvHqko7W4XMFmJUzg/viewform" target='_blank'>Register</a></li>
            <li><a href="https://drive.google.com/drive/folders/10rg6bsXhj8f7FAUODSHTb_Nil_ho9SYz" target='_blank'>Rulebook</a></li>
          </ul>
        </div>

        {/* right side */}
        <div className="right-side">
          <div className="contact-image-container">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} id="location-icon" />
              Department of Mechanical Engineering, Government College of Engineering, Karuppur, Salem - 636011
            </p>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62509.28753462909!2d78.10412419650879!3d11.706416889358225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfa3400000001%3A0x786937287cc3f1eb!2sGovernment%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1729430777919!5m2!1sen!2sin"
              width="400"
              height="200"
              // style={{ border: '0' }}
              className='footer-gmap'
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


      </div>


      {/* Footer bottom text */}
      <div className="footer-bottom">
        <hr />
        <p className='footer-p'>Designed & Developed by <a href="https://renderspark.vercel.app/" target="_blank" rel="noopener noreferrer">Renderspark.</a></p>

      </div>
    </footer>
  );
};

export default Footer;
