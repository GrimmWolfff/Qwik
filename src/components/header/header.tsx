import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="/">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="https://portfolio-grimmwolfff.vercel.app/" target="_blank">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/sandrika">
            Sandrika
          </a>
        </li>
        <li>
          <a href="/pilpani">
            Levani
          </a>
        </li>
        <li>
          <a href="/kuchuxa">
            Kuchuxa
          </a>
        </li>
      </ul>
    </header>
  );
});
