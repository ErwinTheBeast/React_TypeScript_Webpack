type SkillsGroup = {
  group: string;
  items: string[];
};

type SkillsProps = {
  skills: SkillsGroup[];
};

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="grid grid2">
      {skills.map((g) => (
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
