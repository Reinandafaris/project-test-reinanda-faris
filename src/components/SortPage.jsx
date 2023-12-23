import PropTypes from 'prop-types';

const SortPage = ({ pageSize, page, handlePageSizeChange, handleSortChange, loading }) => {
  return (
    <div className="sm:flex justify-between relative m-5 p-6">
      <div>
        <h2 className="text-xl mb-3 font-medium">Showing {loading ? "Loading..." : page} - {loading ? "Loading..." : pageSize} of 100</h2>
      </div>
      <div className="sm:flex gap-5">
        <h2 className="text-xl mb-3 font-medium">Showing per page : {""}
          <select className="cursor-pointer" onChange={(e) => handlePageSizeChange(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </h2>
        <h2 className="text-xl font-medium">Sort by :  {""}
          <select className="cursor-pointer" onChange={(e) => handleSortChange(e.target.value)}>
            <option value={"-published_at"}>Latest</option>
            <option value={"published_at"}>Old</option>
          </select>
        </h2>
      </div>
    </div>
  );
};

SortPage.propTypes = {
  pageSize: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handlePageSizeChange: PropTypes.func.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SortPage;
