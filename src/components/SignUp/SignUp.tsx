import styles from './SignUp.module.scss';

const SignUp = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section_image_container}>
        </div>
        <div className={styles.section}>
          <div className={styles.card}>
            <div className={styles.card_content}>
              <h1>Sign Up</h1>
              <form>
                <div className={styles.form}>
                  <label className={styles.label_field}>Name</label>
                  <input type="text" className={styles.input_field} />
                </div>
                <div className={styles.form_down}>
                  <label className={styles.label_field}>Email</label>
                  <input type="email" className={styles.input_field} />
                </div>
                <div className={styles.form_down}>
                  <label className={styles.label_field}>Password</label>
                  <input type="password" className={styles.input_field} />
                </div>
                <button type="submit" className={styles.button}>
                Create Account
                </button>
              </form>
              <div className={styles.cta_card}>
                <p>Already have an account?</p>
                <a href="/login">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
