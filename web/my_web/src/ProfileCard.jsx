import "./profilecard.css";

function ProfileCard() {
  return (
    <section className="profile-card">
      <div className="profile-left">
        <img
          src="./profile.jpeg"
          alt="Chin-Yu Lee"
          className="profile-photo"
        />
      </div>
      <div className="profile-right">
        <h1 className="profile-name">Chin-Yu Lee (李清宇)</h1>
        <p className="profile-title">
          Research Fellow in Precision Medicine
          <br />
          Bioinformatics Engineer
          <br />
          Medical Technologist
        </p>
        <a href="mailto:benson106075@gmail.com" className="profile-email">
          benson106075@gmail.com
        </a>
        <div className="profile-social">
          <a
            href="https://github.com/benson1231"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub"
          >
            <i className="fa fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/chin-yu-lee-471109294"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileCard;
