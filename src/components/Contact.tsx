import '../styles/components/Contact.scss';
import '../styles/ui/button.scss';
import { langContact } from '../lang/langContact';

export const Contact = () => {
  return (
    <div className="contactCard">
      <div className="contactLeft">
        <h3 className="contactTitle">
          {langContact.LETS_BUILD_SOMETHING_GREAT}
        </h3>
        <p className="contactNote">
          {langContact.THE_QUICKEST_WAY_TO_REACH_ME}
        </p>
      </div>

      <div className="contactRight">
        <a
          className="button buttonPrimary"
          href={`mailto:${langContact.YOU_AT_EXAMPLE_DOT_COM}`}
        >
          {langContact.EMAIL_ME}
        </a>
        <p className="contactEmail">
          <span className="muted">{langContact.OR_WRITE_TO}</span>{' '}
          <span>{langContact.YOU_AT_EXAMPLE_DOT_COM}</span>
        </p>
      </div>
    </div>
  );
};
