import React from 'react';
import styles from './footer.module.css';
import {assets} from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <div>
      {/* Footer-top */}
      <footer className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.mainSection}>
            <div className={styles.logo}>
              <Link href='/'>  
              <Image 
            src={assets.Logo}
            alt='MissionLogo'
            priority= {true} />
            </Link>
            </div>
            <p>Transforming relationships through compassionate guidance, emotional healing, 
              and renewed connection. Your journey to stronger bonds begins here.</p>
            <div className={styles.socialLinks}>
              <Link href="#" className={styles.socialLink}><Icon.FacebookLogo/></Link>
              <Link href="#" className={styles.socialLink}><Icon.WhatsappLogo /></Link>
              <Link href="#" className={styles.socialLink}><Icon.InstagramLogo /></Link>
              <Link href="#" className={styles.socialLink}><Icon.TwitterLogo /></Link>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3>Quick Links</h3>
           
           <ul className={styles.linkList}>
              <li><Link href='/'>Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact">Donate</Link></li>
            </ul>
          
          </div>
          
          <div className={styles.column}>
            <h3>projects</h3>
            <ul className={styles.linkList}>
              <li><a href="#">Empowerment</a></li>
              <li><a href="#">Free Education</a></li>
              <li><a href="#">Healthcare Access</a></li>
              <li><a href="#">Disaster Relief</a></li>
              <li><a href="#">Community Development</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3>Contact Us</h3>
            <address className={styles.address}>
              123 Company St.<br />
              City, State 12345<br />
              Email: info@company.com<br />
              Phone: (123) 456-7890
            </address>
          </div>
        </div>
      </footer>
      
      {/* Footer-bottom */}
      <footer className={styles.footerBottom}>
        <p>© 2025 Light of Hope Mission. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;