import styles from "./Career.style";

const Career = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <div css={styles.label}>
          <h3>MBI 솔루션</h3>
          <span>FrontEnd Engineer</span>
          <span>2022.02 ~ 현재</span>
        </div>
        <div css={styles.content}>
          <ul>
            <li>
              <h3>Happytalk 웹채팅</h3>
              <h5>Description</h5>
              <p>사용자의 채팅 및 채팅창 커스텀</p>
              <h5>Skills</h5>
              <p>Javascript, React, Next.js, emotion, TypeScript, Rollup</p>
            </li>
            <li>
              <h3>상담콜</h3>
              <h5>Description</h5>
              <p>ARS 상담 서비스</p>
              <h5>Skills</h5>
              <p>Javascript, React, Styled component</p>
            </li>
          </ul>
        </div>
      </div>
      <div css={styles.wrapper}>
        <div css={styles.label}>
          <h3>시큐레이어</h3>
          <span>웹개발</span>
          <span>2017.02 ~ 2022.03</span>
        </div>
        <div css={styles.content}>
          <ul>
            <li>
              <h3>eyeCloudXOAR</h3>
              <h5>Description</h5>
              <p>
                표준화된 보안 대응 프로세스에 따라, 각종 보안 위협에 자동으로
                대응하는 솔루션
              </p>
              <h5>Skills</h5>
              <p>Java, Jsp, CSS, Html, Javascript, Spring, Jenkins</p>
            </li>
            <li>
              <h3>eyeCloudAI</h3>
              <h5>Description</h5>
              <p>국가정보관리원 내의 AI 기술로 탐지된 데이터 시각화</p>
              <h5>Skills</h5>
              <p>Java, Jsp, CSS, Html, Javascript, Spring, Jenkins</p>
            </li>
            <li>
              <h3>Intelligence Center</h3>
              <h5>Description</h5>
              <p>사내 Data 적재 및 보관, 업무 프로세스 진행 솔루션</p>
              <h5>Skills</h5>
              <p>Java, Jsp, CSS, Html, Javascript, Spring, Jenkins</p>
            </li>
            <li>
              <h3>Threat Intelligence</h3>
              <h5>Description</h5>
              <p>위협정보 분석 및 시각화 솔루션</p>
              <h5>Skills</h5>
              <p>Java, Jsp, CSS, Html, Javascript, Spring, Jenkins</p>
            </li>
            <li>
              <h3>BlueBird</h3>
              <p>로그 보안관제 솔루션</p>
              <h5>Skills</h5>
              <p>Java, Jsp, CSS, Html, Javascript, Spring, Jenkins</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Career;
