import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router";
import Toastify from "toastify-js";

const Detail = () => {
  const navigate = useNavigate();
  const [cuisineDetail, setCuisineDetail] = useState({});
  const { id } = useParams();

  const fetchDetail = async () => {
    try {
      const { data } = await axios.get(
        `https://www.andylie.web.id/pub/cuisines/${id}`
      );
      // console.log(data);

      setCuisineDetail(data?.data);
    } catch (error) {
      Toastify({
        text: error.response.data.error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        className: "custom-toast",
        style: {
          background: "#F87171",
          color: "black",
          border: "solid #000000",
          borderRadius: "8px",
          boxShadow: "2px 2px black",
          paddingRight: "2.5rem",
        },
      }).showToast();
      navigate("/");
    }
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
        <div className="text-white px-4 py-8">
          <div className="max-w-6xl mx-auto">
            {/* <!-- Header --> */}
            <div className="text-center mb-12 bg-gradient-to-r from-blue-600/20 via-transparent to-orange-600/20 py-12 rounded-2xl shadow-xl/50 shadow-white/80">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-orange-100/90 to-orange-400 bg-clip-text text-transparent">
                Discover More About This Cuisine
              </h1>
              <p className="font-bold text-gray-300 text-lg leading-relaxed">
                Learn more about this dish — from its price and category to who
                created it.
              </p>
            </div>

            {/* <!-- Back Button --> */}
            <div className="mb-8">
              <Link
                to={{
                  pathname: "/",
                }}
                className="inline-flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition duration-200 text-gray-300 hover:text-white border border-gray-600/50"
              >
                <span className="font-bold text-2xl">←</span>
                Back to Cuisines
              </Link>
            </div>

            {/* <!-- Detail Section --> */}
            <div className="px-4 py-12 text-center text-white bg-gradient-to-r from-orange-600/20 via-transparent to-purple-600/20 rounded-xl border border-gray-700/30 shadow-2xl">
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-orange-700 via-orange-100 to-purple-700 bg-clip-text text-transparent">
                Detail Of {cuisineDetail?.name}
              </h2>

              {/* <!-- Detail Card --> */}
              <div className="bg-gradient-to-br from-white/95 to-gray-100/95 rounded-2xl text-gray-800 max-w-2xl mx-auto overflow-hidden shadow-2xl border border-gray-500">
                {/* <!-- Image Section --> */}
                <img
                  src={cuisineDetail?.imgUrl}
                  alt={cuisineDetail?.name}
                  className="w-full h-100 object-cover object-center border-b border-b-gray-400"
                />

                {/* <!-- Content Section --> */}
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* <!-- Left Column --> */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Price
                        </h3>

                        <div className="inline-block">
                          <div className="flex items-center gap-2 text-center">
                            <div>
                              <span className="text-xl font-bold text-green-600">
                                Rp
                              </span>
                            </div>

                            <div>
                              <span className="text-gray-600 text-xl">
                                {cuisineDetail?.price?.toLocaleString("id-ID")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center */}
                    <div className="space-y-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Category
                      </h3>
                      <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium border border-black/20">
                        {cuisineDetail?.Category?.name}
                      </span>
                    </div>

                    {/* <!-- Right Column --> */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Created By
                        </h3>
                        <div className="inline-block ">
                          <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold">
                                {cuisineDetail.User &&
                                  cuisineDetail.User.username[0].toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {cuisineDetail.User &&
                                  cuisineDetail.User.username[0].toUpperCase() +
                                    cuisineDetail.User.username.slice(1)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Description Section --> */}
                  <div className="mt-8 pt-8 border-t border-gray-200 text-justify">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {cuisineDetail?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
