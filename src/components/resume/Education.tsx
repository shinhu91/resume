import styles from "./Education.style";

const Education = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <h4>국가평생 교육진흥원</h4>
        <div css={styles.department}>컴퓨터공학</div>
        <div css={styles.period}>2019.12 ~ 2021.10</div>
      </div>
      <div css={styles.wrapper}>
        <h4>명지전문대학</h4>
        <div css={styles.department}>컴퓨터전자과</div>
        <div css={styles.period}>2010.03 ~ 2015.08</div>
      </div>
    </>
  );
};

export default Education;
