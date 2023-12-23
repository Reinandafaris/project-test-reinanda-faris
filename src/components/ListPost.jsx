import { useEffect, useState } from 'react';
import axios from 'axios';
import LazyLoad from 'react-lazyload';
import CourseCard from '@/components/CardList';
import { BASE_URL } from '@/lib/baseUrl';
import SortPage from '@/components/SortPage';
import toast from "react-hot-toast";
import CardListSkeleton from "@/components/CardListSceleton";

const ListPost = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState('-published_at');

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}?page[number]=${page}&page[size]=${pageSize}&append=original_image&sort=${sort}`);

        const data = response.data.data;
        console.log(data);
        if (data.length > 0) {
          toast.success(response.data.message);
          setTimeout(() => {
            setIdeas(data);
            setLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.log(error.massage);
        toast.error(error.response.data.message);
        setLoading(false);
      }
    };
    getData();
  }, [page, pageSize, sort]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchData(newPage);
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  return (
    <>
    <SortPage 
      pageSize={pageSize}
      page={page}
      handlePageSizeChange={handlePageSizeChange}
      handleSortChange={handleSortChange}
      loading={loading}
    />
    <section className={`min-h-screen px-5 py-5 bg-white relative`}>
      {loading ? (
        <CardListSkeleton />
      ) : (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 content-end">
          {ideas.map((idea, index) => (
            <LazyLoad key={index} height={200} offset={100}>
              <CourseCard idea={idea} />
            </LazyLoad>
          ))}
        </div>
      )}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          &larr; Previous
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={ideas.length < pageSize}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next &rarr;
        </button>
      </div>
    </section>
    </>
  );
};

export default ListPost;