import styles from "./JobPage.module.scss"
import {Link} from "react-router-dom";
import {ArrowLeft, MessagesSquare} from "lucide-react";


export default function JobPage(){
    return(
        <div className={styles.page}>

            {/* OUTER CONTAINER – 1900px */}
            <div className={styles.outer}>

                {/* WRAPPER — 1200px */}
                <div className={styles.breadcrumbsWrapper}>
                <div className={styles.breadcrumbs}>
                    <Link to="/">
                        <ArrowLeft size={18}/>
                        Powrot do Wyszukiwania</Link>
                    <span>&gt; React</span>
                    <span>&gt; Frontend</span>
                    <span>&gt; Remote</span>
                    <span>&gt; Frontend Developer</span>
                </div>
                </div>
                {/* INNER CONTAINER – 1200px */}
                <div className={styles.inner}>

                    <main className={styles.main}>
                        <h1>Frontend Developer</h1>
                        {/* TODO */}
                    </main>

                    <aside className={styles.sidebar}>
                        {/* TODO*/}
                    </aside>
                </div>

            </div>
            <button className={styles.chatButton}>
                <MessagesSquare/>
            </button>
        </div>
    )
}