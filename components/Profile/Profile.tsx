import type { FC } from "react";
import Image from "next/image";

import styles from "./Profile.module.scss";
import PROFILE_CONFIG from "../../config/profile-config";
import HACK_CONFIG from "../../config/hack-config";
import Link from "next/link";
import {HackPanel} from './HackPanel';

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
          <HackPanel />
        </div>
      </div>
    </section>
  );
};

export { Profile };
