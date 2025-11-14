import styles from "./JobPage.module.scss"
import {Link} from "react-router-dom";
import {ArrowLeft, MessagesSquare} from "lucide-react";
import JobHeader from "../../components/Job/JobHeader";




export default function JobPage() {
    const job: Job = {
        companyLogo: "/public/VaimoLogo.jpg",
        title: "Frontend Developer",
        companyName: "Vaimo",
        categories: ['Frontend', 'React'],
        level: "Mid",
        location: "Wroclaw, Szczytnicka 11, Business Link",
        validUntil: "2025-12-03 (zostalo 19 dni)",
    }


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
                        <JobHeader job={job} />
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