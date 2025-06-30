const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const visiblePages = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, '...', totalPages];
    if (currentPage >= totalPages - 2) return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  return (
    <div className="flex justify-between items-center py-4 px-4 border-t border-gray-300 text-sm text-gray-500">
      {/* Items Per Page */}
      <div>
        Items Per Page
        <select className="ml-2 border rounded px-2 py-1 text-sm">
          <option>50</option>
        </select>
      </div>

      {/* Page Buttons */}
      <div className="flex items-center gap-1">
        {/* Prev Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 rounded ${currentPage === 1 ? 'text-gray-300' : 'hover:bg-gray-200'}`}
        >
          &#8249;
        </button>

        {/* Page Numbers */}
        {visiblePages().map((page, index) =>
          page === '...' ? (
            <span key={index} className="px-2 py-1">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded ${page === currentPage ? 'bg-purple-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {page}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 rounded ${currentPage === totalPages ? 'text-gray-300' : 'hover:bg-gray-200'}`}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
