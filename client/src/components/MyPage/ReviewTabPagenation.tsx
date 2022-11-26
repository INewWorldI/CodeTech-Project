// Snack Review List fetching & boxing comp
const ReviewTabPagenation = ({ currentPage, totalPages, onClickPage }: any) => {
  return (
    <ul className="flex flex-row items-center justify-center w-full px-4 mt-3 space-x-1 mb-7">
      <li
        className={`
              ${1 === currentPage && 'invisible'}`}
      >
        <button onClick={() => onClickPage('Prev')}>Prev</button>
      </li>
      {Array.from({ length: +totalPages }).map((el, i) => {
        return (
          <li
            key={i}
            className={` p-1 rounded-lg  ${
              +currentPage === i + 1
                ? 'bg-blue-400 text-white hover:bg-blue-400'
                : ''
            }`}
          >
            <button onClick={() => onClickPage(i + 1)}>{i + 1}</button>
          </li>
        );
      })}
      <li
        className={`
              ${totalPages === currentPage && 'invisible'}`}
      >
        <button onClick={() => onClickPage('Next')}>Next</button>
      </li>
    </ul>
  );
};

export default ReviewTabPagenation;
