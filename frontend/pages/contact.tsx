import style from "../styles/contact.module.scss";
import ContactOther from "../components/contact-ways"
import Head from 'next/head'

export default function Contact() {
  return (
    <div>
        <Head>
            <title>Yoni Kosiner | Contact Page</title>
            <meta name="Contact page" content="Get in contact with Yoni Kosiner" />
        </Head>
        <h1 className={style.title}>Contact Me</h1>
        {/*Main contect section*/}
        <div className={style.formWrapper}>
          <form
            action="https://nodejs-sportfolio-yoni.herokuapp.com/contact"
            method="POST"
          >
            {/* --------- Name ---------- */}
            <input className={style.main_input} type="text" name="name" placeholder="Name: " />
            {/* --------- Email ---------- */}
            <br />
            <input className={style.main_input} type="email" name="email" placeholder="Email: " />
            {/* --------- Subject ---------- */}
            <br />
            <input className={style.main_input} type="text" name="subject" placeholder="Subject: " />
            {/* --------- Message ---------- */}
            <br />
            <input className={style.message} type="text" name="message" placeholder="" />
            {/* --------- Submit button center ---------- */}
            <span className={style.submitCenter}>
              {/* --------- Submit button ---------- */}
              <div className={style.submit}>
                <button>Submit</button>
              </div>
              <br />
            </span>
          </form>
        </div>
        {/*Other ways to get in touch*/}
        <ContactOther />
    </div>
  );
};
