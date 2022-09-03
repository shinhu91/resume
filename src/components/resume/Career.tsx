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
                            <h4>Happytalk 웹채팅</h4>
                            <h5>Description</h5>
                            <p>
                                채팅 상담 서비스로, 사용자별 채팅 화면에 대한
                                커스텀 기능을 만들고 유지보수 하고 있습니다.
                            </p>
                            <h5>Skills</h5>
                            <p>
                                Javascript, React, Next.js, emotion, TypeScript,
                                Rollup, jenkins
                            </p>
                        </li>
                        <li>
                            <h4>상담콜</h4>
                            <h5>Description</h5>
                            <p>
                                ARS 상담 서비스로, ARS를 통해 유입 되는 상담에
                                대한 정보들을 표현하는 기능을 유지보수 하고
                                있습니다.
                            </p>
                            <h5>Skills</h5>
                            <p>Javascript, React, Styled component, jenkins</p>
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
                            <h4>eyeCloudXOAR</h4>
                            <h5>Description</h5>
                            <p>
                                표준화된 보안 대응 프로세스에 따라, 각종 보안
                                위협에 자동으로 대응하는 솔루션 입니다.
                            </p>
                            <h5>Skills</h5>
                            <p>
                                Java, Jsp, CSS, Html, Javascript, Spring,
                                Jenkins
                            </p>
                        </li>
                        <li>
                            <h4>eyeCloudAI</h4>
                            <h5>Description</h5>
                            <p>
                                국가정보관리원 내의 AI 기술로 탐지된 데이터
                                시각화를 담당 했습니다.
                            </p>
                            <h5>Skills</h5>
                            <p>
                                Java, Jsp, CSS, Html, Javascript, Spring,
                                Jenkins
                            </p>
                        </li>
                        <li>
                            <h4>Intelligence Center</h4>
                            <h5>Description</h5>
                            <p>
                                사내 Data 적재 및 보관, 업무 프로세스 진행
                                솔루션을 개발 및 유지보수 했습니다.
                            </p>
                            <h5>Skills</h5>
                            <p>
                                Java, Jsp, CSS, Html, Javascript, Spring,
                                Jenkins
                            </p>
                        </li>
                        <li>
                            <h4>Threat Intelligence</h4>
                            <h5>Description</h5>
                            <p>
                                안랩 내 위협정보 데이터 분석 및 시각화 솔루션을
                                유지보수 했습니다.
                            </p>
                            <h5>Skills</h5>
                            <p>
                                Java, Jsp, CSS, Html, Javascript, Spring,
                                Jenkins
                            </p>
                        </li>
                        <li>
                            <h4>BlueBird</h4>
                            <p>
                                수집된 로그를 분석하여 발생된 특정 이벤트에 대한
                                대응 솔루션을 개발 및 유지보수 했습니다.
                            </p>
                            <h5>Skills</h5>
                            <p>
                                Java, Jsp, CSS, Html, Javascript, Spring, c3.js,
                                d3.js, chart.js Jenkins
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Career;
