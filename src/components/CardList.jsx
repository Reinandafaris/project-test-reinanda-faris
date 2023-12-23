import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import CardListSkeleton from "@/components/CardListSceleton";

const CardList = ({ idea, loading }) => {
  if (loading) {
    return <CardListSkeleton />;
  }
  return (
    <LazyLoad height={200} offset={100}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          className="object-cover h-40 w-full"
          src={idea.original_image[0].url}
          alt=""
        />
        <div className="p-4">
          <p className="text-sm">{idea.published_at}</p>
          <h5 className="mt-3 text-sm font-semibold">{idea.title}</h5>
        </div>
      </div>
    </LazyLoad>
  );
};

CardList.propTypes = {
  idea: PropTypes.shape({
    title: PropTypes.string,
  }),
  loading: PropTypes.bool,
};

export default CardList;
