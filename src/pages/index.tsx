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
        </a>
      </Link>
    </main>
  );
};

export default Home;
