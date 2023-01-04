import Link from 'next/link';

const Home = () => {
  return (
    <main
      style={{ backgroundImage: `url('./context_bg.webp')` }}
      className='min-h-screen  bg-cover bg-no-repeat bg-center flex flex-column gap-4 justify-center items-center'
    >
      <Link href='/context/new' legacyBehavior>
        <a>
          <button className='p-4 rounded-md pointer-cursor border-2  text-white hover:bg-black  hover:border-none'>
            Create Context
          </button>
        </a>
      </Link>
    </main>
  );
};

export default Home;
