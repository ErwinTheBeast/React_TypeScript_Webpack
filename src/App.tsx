import './styles.scss';
import { portfolio } from './content/portfolio';
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
      <Navbar
        name={portfolio.name}
        social={portfolio.social}
        links={[
          { label: 'About', href: '#about' },
          { label: 'Skills', href: '#skills' },
          { label: 'Projects', href: '#projects' },
          { label: 'Experience', href: '#experience' },
        ]}
      />
      <main>
        <Hero content={portfolio} />

        <Section id="about" eyebrow="Intro" title={portfolio.about.heading}>
          <div className="grid grid2">
            <div className="card">
              <p className="lead">{portfolio.about.body}</p>
            </div>
            <div className="card">
              <h3 className="cardTitle">Highlights</h3>
              <ul className="bullets">
                {portfolio.about.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Toolkit"
          title="Skills"
          description="A snapshot of what I use most often."
        >
          <Skills skills={portfolio.skills} />
        </Section>

        <Section
          id="projects"
          eyebrow="Work"
          title="Featured Projects"
          description="A few projects I’ve enjoyed building."
        >
          <Projects projects={portfolio.projects} />
        </Section>

        <Section
          id="experience"
          eyebrow="Background"
          title="Experience"
          description="Roles and impact over time."
        >
          <Experience items={portfolio.experience} />
        </Section>

        <Section id="contact" eyebrow="Next" title={portfolio.contact.heading}>
          <Contact
            heading="Let’s build something great"
            email={portfolio.contact.email}
            note={portfolio.contact.note}
          />
        </Section>
      </main>
      <Footer name={portfolio.name} social={portfolio.social} />
    </>
  );
};
