import styles from './download_btn.module.css'



export default function Download_btn({ label, href }) {
  return (
    <div className={styles.actions}>
        <a className={styles.btn} href={href} download>
          <span>{label}&nbsp;</span><i class="icon-download-cloud"></i>
        </a>
    </div>
  )
}