import './styles/global.scss';
import './styles/ui/card.scss';
import './styles/ui/grid.scss';
import { langAbout, langAboutHighlightItems } from './content/lang/langAbout';
import { langContact } from './content/lang/langContact';
import { langExperience } from './content/lang/langExperience';
import { langProjects } from './content/lang/langProjects';
import { langSkills } from './content/lang/langSkills';
import { navLinks } from './helpers/navLinks';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Section } from './components/Section';
import { Skills } from './components/Skills';

export const App = () => {
  return (
    <>
      <Navbar links={navLinks} />
      <main>
        <Hero />

        <Section id="about" eyebrow={langAbout.INTRO} title={langAbout.ABOUT}>
          <div className="grid grid2">
            <div className="card">
              <p className="lead">
                {
                  langAbout.IM_A_SOFTWARE_ENGINEER_FOCUSED_ON_PRODUCT_UI_AND_PERFORMANCE
                }
              </p>
            </div>
            <div className="card">
              <h3 className="cardTitle">{langAbout.HIGHLIGHTS}</h3>
              <ul className="bullets">
                {langAboutHighlightItems.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow={langSkills.TOOLKIT}
          title={langSkills.SKILLS}
          description={langSkills.A_SNAPSHOT_OF_WHAT_I_USE_MOST_OFTEN}
        >
          <Skills />
        </Section>

        <Section
          id="projects"
          eyebrow={langProjects.WORK}
          title={langProjects.FEATURED_PROJECTS}
          description={langProjects.A_FEW_PROJECTS_IVE_ENJOYED_BUILDING}
        >
          <Projects />
        </Section>

        <Section
          id="experience"
          eyebrow={langExperience.BACKGROUND}
          title={langExperience.EXPERIENCE}
          description={langExperience.ROLES_AND_IMPACT_OVER_TIME}
        >
          <Experience />
        </Section>

        <Section
          id="contact"
          eyebrow={langContact.NEXT}
          title={langContact.CONTACT}
        >
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
};
