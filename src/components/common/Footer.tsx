import * as S from '../../styles/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <S.Footer>
      <S.Address>
        <p>&copy;2024&#46;SeoyoungPark.</p>
        <S.FooterLink>
          <p>
            <a
              href="https://github.com/seokachu/TodoList-TS-Ver"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSquareGithub} />
            </a>
          </p>
          <p>
            <a
              href="https://seokachu.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faBlogger} />
            </a>
          </p>
        </S.FooterLink>
      </S.Address>
    </S.Footer>
  );
};

export default Footer;
