import styles from "./Awards.style";

const Awards = () => {
  return (
    <>
      <section css={styles.wrapper}>
        <h4>정보처리기사</h4>
        <div>2019.11</div>
      </section>
      <section css={styles.wrapper}>
        <h4>정보처리 산업기사</h4>
        <div>2016.07</div>
      </section>
    </>
  );
};

export default Awards;
