import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../constants';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-end py-6">
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
