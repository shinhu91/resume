import { css } from "@emotion/react";

const styles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #eee;
    /* page-break-after: always; */
    h2 {
      margin: 4rem 0 4rem;
    }
  `,
  label: css`
    width: 100px;
  `,
  content: css`
    flex: 1;
  `,
};

export default styles;
