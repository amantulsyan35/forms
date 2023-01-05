import Link from 'next/link';
import { AiFillPlayCircle } from 'react-icons/ai';

const Home = () => {
  return (
    <main
      style={{ backgroundImage: `url('./context.jpg')` }}
      className='min-h-screen  bg-cover bg-no-repeat bg-center flex flex-column gap-4 justify-center items-center'
    >
      <Link href='/context/new' legacyBehavior>
        <a>
          <AiFillPlayCircle className=' h-[128px] w-[128px] text-[#999] hover:text-[#fff] text-[40px] mt-[-75px]' />
          {/* <button className='p-4 rounded-md pointer-cursor border-2  text-white hover:bg-black  hover:border-none'>
            Create Context
          </button> */}
        </a>
      </Link>
    </main>
  );
};

export default Home;
