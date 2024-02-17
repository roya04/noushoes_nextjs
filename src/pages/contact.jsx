import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '@/styles/contact.module.scss';
import Link from 'next/link';

const Contact = () => (
  <section className={styles.communication}>
    <div className={styles.textbox}>
            <h1>CONTACT</h1>
            <h6>- GET IN TOUCH</h6>
          </div>
    <div className={styles.contact}> <Formik
      initialValues={{ name: '', email: '', phoneNumber: '', message: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = 'Required';
        } else if (
          !/^[0-9]{10}$/i.test(values.phoneNumber)
        ) {
          errors.phoneNumber = 'Invalid phone number';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles['form-container']}>
          <div className={styles['form-row']}>
            <div className={styles['form-column']}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <Field type="text" name="name" className={styles['input-field']} />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>
            <div className={styles['form-column']}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <Field type="email" name="email" className={styles['input-field']} />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>
          </div>
          <div>
            <label htmlFor="phoneNumber" className={styles.label}>
              Phone Number
            </label>
            <Field type="tel" name="phoneNumber" className={styles['input-field']} />
            <ErrorMessage name="phoneNumber" component="div" className={styles.error} />
          </div>
          <div>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              className={styles['textarea-field']}
            />
          </div>
          <button className={styles['submit-button']} type="submit" disabled={isSubmitting}>
            Send Message
          </button>
        </Form>
      )}
    </Formik></div>


    <div className={styles.location}>
      <div className={styles.box}>
        <h5>USA</h5>
        <span>San Francisco</span>
        <hr />
        <p><i class="ri-map-pin-line"></i><Link href='https://goo.gl/maps/hoSxfBjzcF4WYyeD6'>19C Trolley Square  Wilmington, DE 19806</Link></p>
        <p><i class="ri-mail-line"></i><Link href="mailto:royahuseyn2004@mail.ru">royahuseyn2004@mail.ru</Link>
        </p>
        <p><i class="ri-phone-line"></i><Link href='tel:+994553452004'>+994 55 345 20 04</Link></p>
      </div>
      <div className={styles.box}>
        <h5>IRELAND</h5>
        <span>Dublin</span>
        <hr />
        <p><i class="ri-map-pin-line"></i><Link href='https://goo.gl/maps/hoSxfBjzcF4WYyeD6'>19C Trolley Square  Wilmington, DE 19806</Link></p>
        <p><i class="ri-mail-line"></i><Link href="mailto:royahuseyn2004@mail.ru">royahuseyn2004@mail.ru</Link>
        </p>
        <p><i class="ri-phone-line"></i><Link href='tel:+994553452004'>+994 55 345 20 04</Link></p>
      </div>
      <div className={styles.box}>
        <h5>BRAZIL</h5>
        <span>Sao Paulo</span>
        <hr />
        <p><i class="ri-map-pin-line"></i><Link href='https://goo.gl/maps/hoSxfBjzcF4WYyeD6'>19C Trolley Square  Wilmington, DE 19806</Link></p>
        <p><i class="ri-mail-line"></i><Link href="mailto:royahuseyn2004@mail.ru">royahuseyn2004@mail.ru</Link>
        </p>
        <p><i class="ri-phone-line"></i><Link href='tel:+994553452004'>+994 55 345 20 04</Link></p>
      </div>
      <div className={styles.box}>
        <h5>PHILIPPINES</h5>
        <span>Quezon City</span>
        <hr />
        <p><i class="ri-map-pin-line"></i>19C Trolley Square  Wilmington, DE 19806</p>
        <p><i class="ri-mail-line"></i>      <Link href="mailto:royahuseyn2004@mail.ru">link</Link>
        </p>
        <p><i class="ri-phone-line"></i><Link href='tel:+994553452004'>+994 55 345 20 04</Link></p>
      </div>


    </div>
  </section>
);

export default Contact;
