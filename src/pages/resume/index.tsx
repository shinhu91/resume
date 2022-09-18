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
      font-size: 1.3rem;
      line-height: 1.4;
      font-weight: 500;
    }
    strong {
      color: #005ab7;
      font-weight: 600;
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
          2017.02 <strong>시큐레이어</strong>의 <strong>기술연구소</strong>{" "}
          소속으로 로그 수집 분석 솔루션의 web 개발 및 유지 보수를 담당
          하였습니다. Spring Framework 기반의 web 프로젝트로 주로 데이터의
          시각화를 다뤘으며 <strong>web application</strong> 관련 지식을 쌓을 수
          있었습니다. <br />
          <br />
          2022.03 <strong>엠비아이솔루션</strong>의{" "}
          <strong>cx 개발 그룹</strong>에 합류 하여 <strong>SPA 방식</strong>을
          사용한 어드민 페이지 개선 및 기능 개발을 진행 하고 있습니다.
          <br />
          <br />
          사용자에게 만족스러운 경험을 제공하기 위해 고민을 하고 그를 위한
          디자인, 기획과 같은 관련 부서와의 커뮤니케이션을 중요시하고
          좋아합니다. 또한 새로운 기술에 대한 거부감이 없으며 알게 되는 것에
          즐거움을 느낍니다.
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
