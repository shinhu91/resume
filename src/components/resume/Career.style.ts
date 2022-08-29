import { css } from "@emotion/react";
import { mqMaxWidth } from "styles/breakpoint";

const styles = {
  wrapper: css`
    display: flex;
    margin-bottom: 3rem;
    ${mqMaxWidth[2]} {
      flex-direction: column;
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid #eee;
    }
  `,
  label: css`
    min-width: 350px;
    margin: 0;
    h3 {
      margin: 0 0 1rem;
    }
    span {
      display: block;
      line-height: 1.5rem;
    }
  `,
  content: css`
    flex: 1;
    ul {
      margin-top: 0; 
      li {
        list-style: none;
        margin-bottom: 4rem;
      }
    }
    h4 {
      margin: 0 0 1rem;
    }
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0 0 1rem;
    }
  `,
};

export default styles;
