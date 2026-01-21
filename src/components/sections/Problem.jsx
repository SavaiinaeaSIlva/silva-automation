// Problem component - Problem section with F-pattern layout
import { problemContent } from "../../data";
import { SectionHeader } from "../ui";
import { Section } from "../layout";
import ProblemCard from "./ProblemCard";

function Problem() {
  return (
    <Section id="problem">
      {/* F-pattern: Left-aligned header */}
      <SectionHeader 
        title={problemContent.header} 
        subtitle={problemContent.intro} 
        align="left" 
      />
      
      {/* Grid of cards - horizontal scan */}
      <div className="grid md:grid-cols-2 gap-4">
        {problemContent.problems.map((problem) => (
          <ProblemCard
            key={problem.id}
            title={problem.title}
            description={problem.description}
          />
        ))}
      </div>
    </Section>
  );
}

export default Problem;
