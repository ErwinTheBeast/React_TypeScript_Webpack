import '../styles/components/Experience.scss';
import { langExperienceItems } from '../lang/langExperience';

export const Experience = () => {
  return (
    <ol className="timeline" aria-label="Experience timeline">
      {langExperienceItems.map((item) => (
        <li
          key={`${item.company}-${item.role}-${item.start}`}
          className="timelineItem"
        >
          <div className="timelineMarker" aria-hidden="true" />
          <div className="timelineCard">
            <div className="timelineTop">
              <div>
                <h3 className="timelineTitle">
                  {item.role} <span className="muted">@ {item.company}</span>
                </h3>
                <p className="timelineDates">
                  {item.start} — {item.end}
                </p>
              </div>
            </div>

            <ul className="timelineList">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
};
