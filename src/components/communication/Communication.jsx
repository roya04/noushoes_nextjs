import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '@/components/communication/communication.module.scss';

const Communication = () => (
  <section className={styles.communication}>  
  <h2 style={{color:'black', fontSize:'30px', fontWeight:'700'}}>Contact us</h2>
  <p style={{color:'black', fontStyle:'italic'}}>
    Learn about our company profile, community impact, sustainable motivation,
    and more.
  </p>
  <Formik
    initialValues={{ name: '', email: '', message: '' }}
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
        <div>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Field type="text" name="name" className={styles['input-field']} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <Field type="email" name="email" className={styles['input-field']} />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>
        <div>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <Field
            as="textarea"
            name="message"
            rows={4}
            cols={50}
            className={styles['input-field']}
          />
        </div>
        <button className={styles.button} type="submit" disabled={isSubmitting}>
          SEND MESSAGE
        </button>
      </Form>
    )}
  </Formik></section>
 
);

export default Communication;
