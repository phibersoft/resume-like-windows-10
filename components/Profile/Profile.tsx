import type { FC } from "react";
import Image from "next/image";

import styles from "./Profile.module.scss";
import PROFILE_CONFIG from "../../config/profile-config";
import HACK_CONFIG from "../../config/hack-config";
import Link from "next/link";

const Profile: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Image
            src={PROFILE_CONFIG.avatarSrc}
            alt={"avatar"}
            width={300}
            height={300}
            className={styles.image}
          />
          <h4 className={styles.title}>Adem UYSAL</h4>
          <p className={styles.subtitle}>Fullstack Developer</p>
        </div>
        <div className={styles.row}>
          <div className={styles.hackpanel}>
            <div className={styles.topbar}>
              <p>Hacktron v1.6</p>

              {/* 3 dots on top right  */}
              <div className={styles.dots}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
            <div className={styles.hacks}>
              {HACK_CONFIG.map((hack, index) => {
                return (
                  <div className={styles.hack} key={`hack-${index}`}>
                    <p>{hack.question}</p>
                    {hack.link ? (
                      <a href={hack.link} target="_blank" rel="noreferrer">
                        {hack.answer}
                      </a>
                    ) : (
                      <p>{hack.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Profile };
