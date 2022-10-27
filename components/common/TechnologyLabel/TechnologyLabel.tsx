import {FC} from 'react';
import styles from "./TechnologyLabel.module.scss";

interface TechnologyLabelProps {
    text: string;
}

const TechnologyLabel: FC<TechnologyLabelProps> = ({ text }) => {

    return (
        <span className={styles.label}>
            {text}
        </span>
    )
}

export { TechnologyLabel };
