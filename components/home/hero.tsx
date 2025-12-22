import { Button } from '@heroui/button';
import { button as buttonStyles } from '@heroui/theme';
import Link from 'next/link';
import { FaDocker, FaDownload, FaGolang, FaNodeJs } from 'react-icons/fa6';
import { HiCodeBracketSquare, HiWrenchScrewdriver } from 'react-icons/hi2';
import { IoCalendar } from 'react-icons/io5';
import { LuAtom } from 'react-icons/lu';
import { MdRocketLaunch, MdSecurity, MdTerminal } from 'react-icons/md';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNestjs } from 'react-icons/si';
import TechBadge from '../reusable/tech-badge';
import StatsCard from './stats-card';
import TerminalGreet from './terminal';

const Hero = () => {
  return (
    <section className="flex-grow flex flex-col justify-center relative">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <TerminalGreet />
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                Fullstack
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500 dark:to-emerald-400">
                  Developer
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                I'm a Fullstack Developer specializing in modern web
                technologies and robust backend systems. Turning coffee into
                clean code.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={'#'}
                className={buttonStyles({
                  color: 'primary',
                  radius: 'full',
                  variant: 'shadow',
                  className:
                    'dark:text-primary-dark h-12 px-8 rounded-full bg-primary text-white font-bold text-base hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30',
                })}
              >
                <MdRocketLaunch className="text-xl" />
                View Projects
              </Link>
              <Button className="h-12 px-8 rounded-full text-zinc-700 dark:text-zinc-100 border-2 border-zinc-200 dark:border-zinc-700 hover:border-primary dark:hover:border-primary bg-transparent font-bold text-base hover:text-primary dark:hover:text-primary transition-colors flex duration-300 items-center gap-2">
                <FaDownload />
                Download CV
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              <TechBadge text="React" icon={LuAtom} href="https://react.dev/" />
              <TechBadge
                text="Node.js"
                icon={FaNodeJs}
                href="https://nodejs.org/"
              />
              <TechBadge
                text="Tailwind"
                icon={RiTailwindCssFill}
                href="https://tailwindcss.com/"
              />
              <TechBadge
                text="Typescript"
                icon={MdTerminal}
                href="https://www.typescriptlang.org/"
              />
              <TechBadge text="Go" icon={FaGolang} href="https://go.dev/" />
              <TechBadge
                text="Nest.js"
                icon={SiNestjs}
                href="https://nestjs.com/"
              />
              <TechBadge
                text="Docker"
                icon={FaDocker}
                href="https://www.docker.com/"
              />
            </div>
          </div>
          {/* Right Content */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center lg:justify-end group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-50 dark:from-zinc-800 dark:to-zinc-900 rounded-5xl rotate-3 scale-95 opacity-50 z-0"></div>
            <div className="relative z-10 w-full max-w-md aspect-square rounded-5xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-700">
              <div className="absolute inset-0 bg-black/20 z-10 hover:bg-black/0 transition-colors duration-500"></div>
              <img
                alt="Abstract geometric dark liquid forms representing code structure"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9xoeP5mfbMoNn8FZlqG15BH9yzADfdddqyBymyHn0W8DOE1vQwEAIXtb6B53hNhbcOUnKsy0WfxsUH34we4owpdB56CyAqSWLWYOyoXjIIUZijCvHYSUXSvUF1zFG_BpARjzRJjsLSC2t-7kN-2Md44gjbagjIsNLgB6_paFYaZHoTS2mOFWQGNxLa5BzrKoRtwNqAGvPiwftCl3Y6dCRtvN7hTY5SF08jgeGhJU4LfHMxkIWw6dAh3t1PoFahKXyrxONonG-atGB"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-background-dark/90 backdrop-blur-md p-4 rounded-4xl border border-zinc-700 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary">
                    <MdSecurity className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-bold">
                      Current Status
                    </p>
                    <p className="text-white font-bold">Open to Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard icon={IoCalendar} title="Years Experience" value="2+" />
          <StatsCard
            icon={HiCodeBracketSquare}
            title="Web & Backend Projects"
            value="5+"
          />
          <StatsCard
            icon={HiWrenchScrewdriver}
            title="Technologies Used"
            value="10+"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
