import { List, X, SignIn } from "@phosphor-icons/react";
import styles from "./nav.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@/components/button";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src={"/logo.png"}
            alt="Logo BeloSpace"
            width={160}
            height={160}
            onClick={() => router.push("/")}
          />
        </div>
        <div className={`${styles.navItens} ${menuOpen ? styles.show : ""}`}>
          <a
            onClick={() => {
              const section = document.getElementById("units");
              section?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Unidades
          </a>
          <a
            onClick={() => {
              const section = document.getElementById("services");
              section?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Serviços
          </a>
          <a
            onClick={() => {
              const section = document.getElementById("about");
              section?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Sobre nós
          </a>
        </div>
        <div className={`${styles.buttonGroup} ${menuOpen ? styles.show : ""}`}>
          <Button>Agende sua Visita</Button>
          <Button appearance="secondary">
            <>
              <SignIn size={16} />
              Entrar
            </>
          </Button>
        </div>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
