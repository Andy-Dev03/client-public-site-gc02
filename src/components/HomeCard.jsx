import { Link } from "react-router";

const HomeCard = ({ cuisine }) => {
  return (
    <>
      {/* <!-- Card --> */}
      <Link to={`/${cuisine.id}`}>
        <div className="group relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl overflow-hidden hover:from-gray-700/90 hover:to-gray-800/90 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-3 border border-gray-700/50 hover:border-blue-500/50">
          <div className="h-42 flex items-center justify-center overflow-hidden">
            <img
              src={cuisine?.imgUrl}
              alt={cuisine?.name}
              className="group-hover:scale-110 transition-transform duration-300"
            />

            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
              <div className="flex">
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-yellow-400 text-sm">★</span>
                <span className="text-yellow-400 text-sm">★</span>
              </div>
              <span className="text-white text-sm font-bold ml-1">4.9</span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                {cuisine?.name}
              </h3>
              <span className="text-green-400 font-bold text-lg">
                {cuisine?.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
            </div>
            <p className="text-gray-300 mb-4 font-medium truncate">
              {cuisine?.description}
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </Link>
    </>
  );
};

export default HomeCard;
