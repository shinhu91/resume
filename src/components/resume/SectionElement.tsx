import { memo, ReactElement } from "react";
import styles from "./SectionElement.style";

interface Props {
    title: string;
    children?: ReactElement;
}

const SectionElement = ({ title, children }: Props) => {
    return (
        <>
            <section css={styles.wrapper}>
                <h2>{title}</h2>
                {children}
            </section>
        </>
    );
};

export default memo(SectionElement);
