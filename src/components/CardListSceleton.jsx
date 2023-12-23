import Skeleton from "react-loading-skeleton";

const CardListSceleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <Skeleton height={200} width="10%" style={{ borderRadius: "20px 20px 0 0" }} />
      <div className="p-4">
        <p className="text-sm">
          <Skeleton width={80} />
        </p>
        <h5 className="mt-3 text-sm font-semibold">
          <Skeleton width="80%" />
        </h5>
      </div>
    </div>
  )
}

export default CardListSceleton