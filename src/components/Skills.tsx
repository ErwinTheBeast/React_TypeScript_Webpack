import '../styles/ui/card.scss';
import '../styles/ui/chip.scss';
import '../styles/ui/grid.scss';
import { langSkillsGroups } from '../lang/langSkills';

export const Skills = () => {
  return (
    <div className="grid grid2">
      {langSkillsGroups.map((skillGroup) => (
        <div key={skillGroup.group} className="card">
          <h3 className="cardTitle">{skillGroup.group}</h3>
          <div className="chipRow" aria-label={`${skillGroup.group} skills`}>
            {skillGroup.items.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
