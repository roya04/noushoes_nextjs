import React from 'react'
import styles from '@/components/footer/footer.module.scss'
import Link from 'next/link'
import Logo from '../../images/logo-footer.png'
import Image from 'next/image'
const footer = () => {
  return (
    <footer className={styles.footer}>


      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href='/'>
              <Image src={Logo} />
            </Link>
          </div>
          <div className={styles.address}>
            <div className={styles.box}>
              <h5>ADDRESS OFFICE 1</h5>
              <h6>460 West 34th Street, 15th floor, New York</h6>
              <p>Email: support@store.com</p>
              <p>Phone: +323 32434 5334</p>
              <p>Fax: ++323 32434 5333</p>
            </div>
            <div className={styles.box}>
              <h5>ADDRESS OFFICE 2</h5>
              <h6>PO Box 16122 Collins Victoria 3000 Australia</h6>
              <p>Email: support@store.com</p>
              <p>Phone: +323 32434 5334</p>
              <p>Fax: ++323 32434 5333</p>
            </div>
          </div>
          <div className={styles.others}>
            <div className={`${styles.box} ${styles.diff1}`}>
              <h5>FIND OUR STORE</h5>

              <ul>
                <li>
                  <Link href='/' > COUPON CODE
                  </Link>
                </li>
                <li>
                  <Link href='/' > SIGNUP FOR EMAIL
                  </Link>
                </li>
                <li>
                  <Link href='/' >SITE FEEDBACK
                  </Link>
                </li>
                <li>
                  <Link href='/' >CAREERS
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.box} ${styles.diff2}`} >
              <h5>GET HELP</h5>

              <ul>
                <li>
                  <Link href='/shop' > Order Status
                  </Link>
                </li>
                <li>
                  <Link href='/shop' >Shipping and Delivery
                  </Link>
                </li>
                <li>
                  <Link href='/shop' > Returns
                  </Link>
                </li>
                <li>
                  <Link href='/shop' >Payment Options
                  </Link>
                </li>
                <li>
                  <Link href='/contact' >Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.box} ${styles.diff2}`}>
              <h5>PRODUCTS</h5>
              <ul>

                <li>
                  <Link href='/shop' >Shoes
                  </Link>
                </li>
                <li>
                  <Link href='/shop' > Clothings
                  </Link>
                </li>
                <li>
                  <Link href='/shop' >Accessories
                  </Link>
                </li>
                <li>
                  <Link href='/contact' >Football Shoes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div></div>

    </footer>
  )
}

export default footer