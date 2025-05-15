import "../CSS/Skills.css"

const Skills = () => {
  return (
    <div className="Skills-Container">

        <h1 className="Heading">Skills</h1>

      <div className="Skills-section">
    
        {/* Frontend Skills */}
        <section className="Skills-box">
          <h2 className="Skills-Title">Frontend -</h2>
          <div className="Skills-List">
            {["React.js", "TypeScript", "JavaScript", "CSS", "HTML"].map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </section>

        {/* Backend Skills */}
        <section className="Skills-box">
          <h2 className="Skills-Title">Backend -</h2>
          <div className="Skills-List">
            {["Django", "Python", "Java", "MongoDB", "SQL"].map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </section>

        {/* Other Skills */}
        <section className="Skills-box">
          <h2 className="Skills-Title">Other Skills -</h2>
          <div className="Skills-List">
            {["Marketing", "Management", "Photography", "Videography", "Editing"].map((skill) => (
              <SkillCard key={skill} skill={skill}/>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: string }) => (
  <div className="Skill-Array">
    <p className="item">{skill}</p>
  </div>
);

export default Skills;
