import styles from './header.module.scss';
import Image from 'next/image';
import logo from '../../images/logo.png';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Search from '../search/Search';

const Header = () => {
  const [showMe, setShowMe] = useState(true);
  const navmenuRef = useRef(null);



  function toggle(event) {
    if (window.innerWidth < 1200) {
      setShowMe(!showMe);
    }
  }



  return (
    <React.Fragment>
      <header className={`${styles.back}`}>
        <div className={styles.logo} >
          <Link href="/">
            <Image width={150} src={logo} />

          </Link>
        </div>
        <div ref={navmenuRef} style={{  display: showMe ? 'none' : 'block',}} onClick={toggle} className={`${styles.navmenu} text-black`}>
          
          <div className={styles.list}> 
          

          <ul>
            <li>
              <Link href='/' > HOME
              </Link>
            </li>
            <li>
              <Link href='/shop' >SHOP
              </Link>
            </li>
            <li>
              <Link href='/about' > ABOUT
              </Link>
            </li>
            <li>
              <Link href='/contact' >CONTACT
              </Link>
            </li>
          </ul>
          </div>
        </div>
        <div className={`${styles.navmenu2} text-black`}
        >
          <ul>
            <li>
              <Link href='/' > HOME
              </Link>
            </li>
            <li>
              <Link href='/shop' >SHOP
              </Link>
            </li>
            <li>
              <Link href='/about' > ABOUT
              </Link>
            </li>
            <li>
              <Link href='/contact' >CONTACT
              </Link>
            </li>
          
          </ul>
        </div>

        <div className={`${styles.right}`}>
          <div className={styles.search}>
            <Search/>
          </div>
          <div onClick={toggle} className={`${styles.bars}`}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
