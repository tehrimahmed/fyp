import React from "react";
import styles from "./ProfileForm.module.css";

export default function ProfileForm() {
  return (
    <form className={styles.formContainer}>
      <div className={styles.formField}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </div>

      <div className={styles.formField}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
      </div>

      <div className={styles.formField}>
        <label htmlFor="mobile">Mobile Number</label>
        <input type="tel" id="mobile" placeholder="Enter your mobile number" />
      </div>

      <button type="submit" className={styles.submitButton}>
        Save Changes
      </button>
    </form>
  );
}