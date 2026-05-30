type ContactProps = {
  heading: string;
  email: string;
  note: string;
};

export const Contact = ({ heading, email, note }: ContactProps) => {
  return (
    <div className="contactCard">
      <div className="contactLeft">
        <h3 className="contactTitle">{heading}</h3>
        <p className="contactNote">{note}</p>
      </div>

      <div className="contactRight">
        <a className="button buttonPrimary" href={`mailto:${email}`}>
          Email me
        </a>
        <p className="contactEmail">
          <span className="muted">Or write to</span> <span>{email}</span>
        </p>
      </div>
    </div>
  );
};
