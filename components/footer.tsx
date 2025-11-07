import dayjs from "dayjs";
import { Fb } from "./icons/Fb";
import { Ig } from "./icons/Ig";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <footer className={`container ${styles.grid}`}>
        <div>
          <h3 className={styles.heading}>
            © {dayjs().get("year")} AZ. Agricola Cascina Rampina di Mauri
            Fabrizio
          </h3>
          <p>CUAA: MRAFRZ83E27A818H - P.I. 03110850132</p>
          <p>Sede: Via Donatello 5 a Monticello Brianza (MB) - 23876</p>
          <a
            rel="noreferrer noopener"
            href="https://wa.me/393246960519"
            target="_blank"
          >
            +39 324 696 0519
          </a>
        </div>
        <div>
          <h3 className={styles.heading}>
            Orari di apertura del nostro punto vendita:
          </h3>
          <p>
            <strong>Martedì</strong> dalle 9 alle 19
          </p>
          <p>
            <strong>Venerdì</strong> dalle 9 alle 19
          </p>
          <p>
            <strong>Sabato</strong> dalle 9 alle 19
          </p>
        </div>
        <div>
          <h3 className={styles.heading}>Seguici:</h3>
          <div className={styles.social}>
            <a
              href="https://www.facebook.com/cascinarampina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Fb aria-label="Facebook" className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/cascinarampina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Ig aria-label="Instagram" className={styles.icon} />
            </a>
          </div>
          <p>Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
}
