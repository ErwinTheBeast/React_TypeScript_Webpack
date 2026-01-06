// /* eslint-disable */

import './styles.css';
import IMAGE from './React.png';
import LOGO from './React.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  const nma = 'f';
  return (
    <>
      <h1>
        Yo!! React_TypeScript_Webpack - {process.env.name}{' '}
        {process.env.NODE_ENV}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" height="200" />
      <img src={LOGO} alt="Logo" width="100" />
      <ClickCounter />
    </>
  );
};
