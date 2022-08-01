import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  
  img {
    display: block;
  }

  em {
    font-style: italic;
  }

  table tr td,
  table tr th {
    vertical-align: middle;
  }
`;

export default GlobalStyle;