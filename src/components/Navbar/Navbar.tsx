import {Link} from "react-router-dom"
import styles from "./Navbar.module.scss"
import {Bell, Bookmark, Menu, User, X,} from "lucide-react";
import { useState } from "react"


export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className={styles.navbar}>

            {/* LEFT — LOGO + LEFT LINKS */}
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


            {/* RIGHT — DESKTOP ONLY */}
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

            {/* BURGER — MOBILE ONLY */}
            <button className={styles.burger} onClick={() => setOpen(!open)}>
                {open? <X size={28}/> : <Menu size={28}/> }
            </button>

            {/* MOBILE MENU */}
            <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
                <Link to="/jobs">OFERTY PRACY</Link>
                <Link to="/companies">PROFILE FIRM</Link>

                <Link to="/calculator">
                    KALKULATOR WYNAGRODZEN
                    <span className={styles.badge}>NEW</span>
                </Link>

                <Link to="/employers">DLA PRACODAWCY</Link>
                <Link to="/pricing">CENNIK</Link>
                <Link to="/publish">PUBLIKUJ</Link>

                <Link to="/login">
                    <User size={18} /> ROMAANDREYUK
                </Link>

                <Link to="/saved">
                    <Bookmark size={18} /> ZAPISANE (2)
                </Link>

                <Link to="/notifications">
                    <Bell size={18} /> POWIADOMIENIA
                </Link>

                <Link to="/language">
                    <div className={styles.flag}></div>
                    &nbsp; JĘZYK
                </Link>
            </div>

        </nav>
    )
}

