import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from "@/lib/baseUrl";

const Banner = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const fetchData = async (page = 1, pageSize = 10, sort = '-published_at') => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}`, {
        params: {
          'page[number]': page,
          'page[size]': pageSize,
          append: ['small_image', 'medium_image', 'large_image', 'original_image'],
          sort: sort,
        },
      });
      const data = response.data.data;
      if (data.length > 0) {
        setTimeout(() => {
          setIdeas(data);
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const imageUrl = ideas[7]?.original_image?.[0]?.url;
  const parallaxValue = scrollPosition * 0.5;

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {loading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top"
              style={{
                backgroundImage: `url(${imageUrl})`,
                transform: `translateY(${parallaxValue}px)`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-black">
                <h1 className="text-4xl font-bold">Reinanda Faris</h1>
              </div>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
              style={{ opacity: 1 - scrollPosition * 0.002 }}
            ></div>
          </>
        )}
        <div
          className="w-full h-[5rem] bg-white transform translate-y-9 -skew-y-3"
          style={{ position: 'absolute', bottom: '0' }}
        ></div>
      </section>
    </>
  );
};

export default Banner;
