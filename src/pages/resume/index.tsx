import { Container } from "@mui/system";
import { css } from "@emotion/react";
import SectionElement from "components/resume/SectionElement";
import Career from "components/resume/Career";
import Education from "components/resume/Education";
import Skills from "components/resume/Skills";
import Awards from "components/resume/Awards";
import UserLink from "components/resume/UserLink";

const styles = {
  wrapper: css`
    padding: 30px 5rem;
    background-color: #fff;
    &::before {
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      display: block;
      content: "";
      width: 100%;
      height: 15px;
      background: #00d2ff;
      background: linear-gradient(90deg, black, white);
    }
  `,
  selfIntroduce: css`
    h1 {
      margin: 0.67em 0;
    }
    p {
      font-size: 2rem;
      line-height: 1.4;
      font-weight: 500;
    }
  `,
};
const Resume = () => {
  return (
    <Container className="containerTest" maxWidth="lg" css={styles.wrapper}>
      <section css={styles.selfIntroduce}>
        <h1>
          안녕하세요,
          <br />
          저는 김신후 입니다.
        </h1>
        <p>
          6년 차 웹 개발자로 일하고 있으며, 최근 프론트엔드에 많은 관심이 생겨
          조금 더 전문성을 갖기 위해 열과 성을 다하는 중입니다. 사용자에게
          만족스러운 경험을 선사하기 위해 여러 사람과 머리를 맞대고 소통을 하는
          것을 좋아합니다.
        </p>
      </section>
      <SectionElement title="Experience">
        <Career />
      </SectionElement>
      <SectionElement title="Other Experiences">
        <Education />
      </SectionElement>
      {/* <SectionElement title="Skills">
        <Skills />
      </SectionElement> */}
      <SectionElement title="Etc">
        <Awards />
      </SectionElement>
      <SectionElement title="Contact">
        <UserLink />
      </SectionElement>
    </Container>
  );
};

export default Resume;
