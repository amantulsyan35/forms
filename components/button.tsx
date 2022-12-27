interface GoBackButtonProps {
  handleBack: () => void;
}

export const GoBackButton = ({ handleBack }: GoBackButtonProps) => {
  return (
    <button
      type='button'
      onClick={handleBack}
      className='text-white bg-[#C2262E] absolute left-4 top-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-[#C2262E]font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-[#C2262E] dark:hover:bg-[#C2262E] dark:focus:ring-[#C2262E]'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='bi bi-arrow-left'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
        />
      </svg>
      <span className='sr-only'>Icon description</span>
    </button>
  );
};
