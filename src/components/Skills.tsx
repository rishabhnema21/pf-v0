import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript, SiMysql, SiPostman   } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

type Skill = {
  icon: IconType;
  name: string;
}


const Skills = () => {
  
const skills: Skill[] = [
  { icon: FaReact, name: "React" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiPostman, name: "Postman" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaGitAlt, name: "Git" },
];

  return (
    <section className="w-full flex justify-between items-center">
      <div className="flex flex-col tracking-wider">
        <h2 className="text-zinc-600 mb-5 dark:text-zinc-200 text-2xl font-[pf-font]">Stack I Use</h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
            {skills.map(({ icon: Icon, name }, index) => (
              <span className="inline-flex bg-zinc-200 dark:bg-zinc-800 dark:border-zinc-500 text-zinc-700 dark:text-zinc-300 rounded py-1 px-3 text-sm gap-2 items-center hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-150 ease-in">
                <Icon /> <span>{name}</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Skills