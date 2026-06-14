import '../styles/ui/card.scss';
import '../styles/ui/chip.scss';
import '../styles/ui/grid.scss';
import { langSkillsGroups } from '../lang/langSkills';

export const Skills = () => {
  return (
    <div className="grid grid2">
      {langSkillsGroups.map((g) => (
        <div key={g.group} className="card">
          <h3 className="cardTitle">{g.group}</h3>
          <div className="chipRow" aria-label={`${g.group} skills`}>
            {g.items.map((item) => (
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
