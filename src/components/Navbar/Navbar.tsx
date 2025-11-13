import {Link} from "react-router-dom"
import styles from "./Navbar.module.scss"
import {Bell, Bookmark, Flag, Save, User, UserIcon} from "lucide-react";


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <Link to="/" className={styles.logoLink}> <span className={styles.bold}>NO</span>
                        <span>FLUFF</span>
                        <span>JOBS</span> </Link>
                </div>
                <Link to="/jobs">OFERTY PRACY</Link>
                <Link to="/companies">PROFILE FIRM</Link>
                <Link to="/calculator" className={styles.new}>KALKULATOR WYNAGRODZEN <span
                    className={styles.badge}>NEW</span></Link>
            </div>
            <div className={styles.right}>
                <Link to="/employers">DLA PRACODAWCY</Link>
                <Link to="/pricing">CENNIK</Link>
                <Link to="/publish">PUBLIKUJ</Link>
                <Link to="/login" className={styles.userLink}>
                    <User className={styles.userIcon}/>
                    <span>ROMAANDREYUK</span>
                </Link>


                <div className={styles.icons}>

                    <Link to="/saved" className={styles.iconLink}>
                    <div className={styles.iconWrapper}>
                        <Bookmark className={styles.icon}/>
                        <span className={styles.notifBadge}>2</span>
                    </div>
                    </Link>

                    <Link to="/notifications" className={styles.iconLink}>
                        <Bell className={styles.icon} />
                    </Link>

                    <Link to="/language" className={styles.iconLink}>
                        <div className={styles.flag}></div>
                    </Link>
                </div>

            </div>
        </nav>
    )
}

