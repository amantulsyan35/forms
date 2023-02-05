import Link from 'next/link';

const Home = () => {
  return (
    <main className='min-h-screen flex flex-col gap-4 justify-center items-center'>
      <Link
        className='underline hover:text-blue-700'
        href='/incorporation/add-incorporation'
      >
        Take me where the form magic happens
      </Link>
      <Link
        className='underline hover:text-blue-700'
        href='/json-rendered/add-json-incorporation'
      >
        Dynamically rendered react comp from json obj
      </Link>
    </main>
  );
};

export default Home;
