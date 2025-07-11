import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { SiApachekafka } from 'react-icons/si';
import { SiNestjs } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-gray-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNestjs className="text-7xl text-pink-800" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiApachekafka className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
