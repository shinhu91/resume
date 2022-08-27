import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./UserLink.style";

const UserLink = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <FontAwesomeIcon icon={["fab", "github"]} />
        <span>https://github.com/shinhu91</span>
      </div>
      <div css={styles.wrapper}>
        <FontAwesomeIcon icon={["fas", "envelope"]} />
        <span>shinhu91@gmail.com</span>
      </div>
    </>
  );
};

export default UserLink;
