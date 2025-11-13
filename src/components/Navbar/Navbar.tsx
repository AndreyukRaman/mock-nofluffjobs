import { Link } from "react-router-dom"
import styles from "./Navbar.module.scss"


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
<div className={styles.logo}>
    <span className={styles.bold}>NO</span> FLUFF <br /> JOBS
</div>
            <Link to="/jobs">OFERTY PRACY</Link>
            <Link to="/companies">PROFILE FIRM</Link>
            <Link to="/calculator" className={styles.new}>KALKULATOR WYNAGRODZEN <span className={styles.badge}>NEW</span></Link>
            </div>
<div className={styles.right}>
    <Link to="/employers">DLA PRACODAWCY</Link>
    <Link to="/pricing">CENNIK</Link>
    <Link to="/publish">PUBLIKUJ</Link>
    <Link to="/login">ROMAANDREYUK</Link>



    <div className={styles.icons}>
        <i className="fa-regular fa-bookmark"></i>
        <i className="fa-regular fa-bell"></i>
        <div className={styles.flag}></div>
    </div>

</div>
        </nav>
    )
}