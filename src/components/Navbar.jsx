import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';
import { useScrollToSection } from '../hooks/useScrollToSection';

const Navbar = () => {
  const scrollToSection = useScrollToSection();
  return (
    <nav className="mb-20 justify-between flex items-center py-6">
      <div className="flex items-center gap-6">
        <button
          className="cursor-pointer text-neutral-300 hover:text-purple-800 transition-colors duration-300"
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button
          className="cursor-pointer text-neutral-300 hover:text-purple-800 transition-colors duration-300"
          onClick={() => scrollToSection('about')}
        >
          About
        </button>
        <button
          className="cursor-pointer text-neutral-300 hover:text-purple-800 transition-colors duration-300"
          onClick={() => scrollToSection('education')}
        >
          Education
        </button>
        <button
          className="cursor-pointer text-neutral-300 hover:text-purple-800 transition-colors duration-300"
          onClick={() => scrollToSection('technologies')}
        >
          Technologies
        </button>
        <button
          className="cursor-pointer text-neutral-300 hover:text-purple-800 transition-colors duration-300"
          onClick={() => scrollToSection('experience')}
        >
          Experience
        </button>
        <button
          className="cursor-pointer text-neutral-300 hover:text-purple-800 transition-colors duration-300"
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </button>
        <button
          className="cursor-pointer text-neutral-300 hover:text-purple-800 transition-colors duration-300"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer hover:text-purple-800 transition-colors" />
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:text-purple-800 transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
