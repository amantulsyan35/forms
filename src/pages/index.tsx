import Link from 'next/link';

const Home = () => {
  return (
    <main className='min-h-screen bg-landing_bg bg-cover bg-no-repeat bg-center flex flex-column justify-center items-center'>
      <Link href='/context/new' legacyBehavior>
        <a>
          <button className='p-4 rounded-md pointer-cursor border-2 text-white hover:bg-black hover:border-none'>
            Create Context
          </button>
        </a>
      </Link>
    </main>
  );
};

export default Home;
