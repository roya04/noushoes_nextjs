import React from 'react'
import styles from '@/styles/about.module.scss'
import Person1 from '../images/person1.webp'
import Person2 from '../images/person2.webp'
import Person3 from '../images/person3.webp'
import Person4 from '../images/person4.webp'

import Image from 'next/image'
import Link from 'next/link'
import Communication from '@/components/communication/Communication'


const about = () => {
  return (
    <>
      <section className={styles.mission}>
        <div className={styles.backgorund}>
          <div className={styles.boxes}>
            <h1>OUR MISSION</h1>
            <p>YOUR SUCCESS IS OUR AMBITION. <br />
              YOUR DEFEAT SPURS US ON TO BE BETTER.</p>
          </div>
        </div>
      </section>
      <section className={styles.staff}>
        <div className={styles.container}>
          <div className={styles.textbox}>
            <h1>TEAM</h1>
            <h6>- OUR STAFF</h6>
          </div>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <div className={styles.imgbox}>
                <Image style={{width:'100'}} src={Person1} />
              </div>
              <div className={styles.content}>
                <h5>CHRISTIAN GREGORY</h5>
                <p>CEO - Founder</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.imgbox}>
              <Image style={{width:'100'}} src={Person2} />

              </div>
              <div className={styles.content}>
                <h5>CHRISTIAN GREGORY</h5>
                <p>CEO - Founder</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.imgbox}></div>
              <Image style={{width:'100'}} src={Person3} />

              <div className={styles.content}>
                <h5>CHRISTIAN GREGORY</h5>
                <p>CEO - Founder</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.imgbox}>
              <Image style={{width:'100'}}  src={Person4} />

              </div>
              <div className={styles.content}>
                <h5>CHRISTIAN GREGORY</h5>
                <p>Master Chef</p>
              </div>
            </div>
          </div>
        </div>


      </section>
      <section className={styles.join} >
        <div className={styles.container}>
          <div className={styles.box}>
            <h5>Staff.</h5>
            <p>Carolyn Flower <br />Norman Barnet <br />Gabriel Barnes <br />Harriet Waver</p>
          </div>
          <div className={styles.box}>
            <h5>Assistant.</h5>
            <p>Hattie Figueroa <br />Sarah cruz <br />Edna Cortez <br />Mabel Castilo</p>
          </div>
          <div className={styles.box}>
            <h5>Staff.</h5>
            <p>Carolyn Flower <br />Norman Barnet <br />Gabriel Barnes <br />Harriet Waver</p>
          </div>
          <div className={styles.box}>
          <h5>Assistant.</h5>
            <p>Hattie Figueroa <br />Sarah cruz <br />Edna Cortez <br />Mabel Castilo</p>
          </div>
          <div className={styles.boxlast}>
            <h5>Would you like to join team & build your dream NOW?</h5>
            <Link href='/'>JOIN OUR TEAM</Link>
          </div>


        </div>
      </section>
      <section className={styles.contact}>

      <Communication/>
      </section>
    </>


  )
}

export default about