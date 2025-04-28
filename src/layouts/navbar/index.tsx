import { UserCircle, List, X } from '@phosphor-icons/react';
import styles from './nav.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src={"/logo.png"} alt='Logo BeloSpace' width={160} height={160} /> 
                </div>
                <div className={`${styles.navItens} ${menuOpen ? styles.show : ''}`}>
                    <a onClick={() => router.push("/workspaces")}>Salas</a>
                    <a onClick={() => router.push("/reservation")}>Reservas</a>
                    <a onClick={() => router.push("/reservation")}>Sobre</a>
                </div>
                <div className={styles.profile}>         
                    <UserCircle size={32} onClick={() => router.push("/profile")}/>
                    <span onClick={() => router.push("/profile")}>Roberto</span>
                    <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} /> : <List size={28} />}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;