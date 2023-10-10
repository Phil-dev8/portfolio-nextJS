"use client";

import styles from "../app/styles/page.module.scss";
import Link from "next/link";
import Image from "next/image";
import Github from "../app/assets/svg/github.svg";
import Linkedin from "../app/assets/svg/linkedin.svg";

export default function Home() {
  return (
    <>
      <div className={styles.social}>
        <Link href="https://github.com/Phil-dev8" target="blank">
          <Image src={Github} width={100} height={100} />
        </Link>
        <Link href="https://www.linkedin.com/in/phil-dev8/" target="blank">
          <Image src={Linkedin} width={100} height={100} />
        </Link>
      </div>

      <div className={styles.container}>
        <h1 className={styles.main_title}>
          Philippe Victoria <br /> Développeur Full-Stack
        </h1>
        <div>
          <p className={styles.presentation}>
            Passionné par la Tech depuis l’adolescence, j’ai décidé de me
            reconvertir dans le développement web avec la ferme intention d’en
            faire mon métier le plus rapidement possible. L’alternance me parait
            la meilleure façon d’y arriver et l’assurance de monter en
            compétences rapidement en situation professionnelle. Le boot camp{" "}
            <Link
              className={styles.link}
              href="https://www.lereacteur.io/"
              target="blank"
            >
              {" "}
              Le Reacteur{" "}
            </Link>
            m'a permis d'acquérir des compétences en{" "}
            <span>JavaScript, HTML/CSS, React.js, Node.js</span> (et d’autres).
            De plus j’ai eu l’opportunité d’effectuer un stage chez{" "}
            <Link
              className={styles.link}
              href="https://www.axome.com/"
              target="blank"
            >
              Axome Brand and Tech
            </Link>
            , qui est une très importante agence web, me permettant de
            travailler en équipe sur divers sites web en utilisant la méthode{" "}
            <span>SCRUM</span>. J’y ai notamment appris l’utilisation de{" "}
            <span>WordPress</span>, les bases du langage <span>PHP</span> ainsi
            que la collaboration via <span>Git</span> qui me permettent d’avoir
            pratiqué une grande variété de technologies en plus de ma formation.
            J’estime avoir les compétences de base a tout bon développeur:{" "}
            <span>rigoureux</span> pour organiser mon travail,{" "}
            <span>curieux</span> pour pratiquer une veille constante sur les
            nouvelles techs, <span>persévérant</span> pour debuger mon code, je
            dispose également d’un <span>bon relationnel</span> grâce à mon
            expérience de commerçant afin d'être à l’écoute des différentes
            cellules d’une entreprise me permettant de rapidement comprendre
            leurs besoins. Je suis disponible pour un entretien pour vous faire
            part de ma forte motivation ainsi que discuter de mon parcours
            atypique et de mes compétences.
          </p>
        </div>
      </div>
    </>
  );
}
