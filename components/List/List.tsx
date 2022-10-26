import { ReactNode } from "react";
import styles from "./List.module.scss";

interface ListProps {
  items: Array<ReactNode>;
}

const List = ({ items }: ListProps) => {
  const uniqId = Math.random().toString(36).substring(2, 9);

  return (
    <ul className={styles.list}>
      {items.map((item, index) => {
        return (
          <li key={`${uniqId}-${index}`} className={`${styles.item} typewriter`}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export { List };
