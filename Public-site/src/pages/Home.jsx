import axios from "axios";
import { useEffect, useState } from "react";
import Toastify from "toastify-js";

import HomeCard from "../components/HomeCard";

const Home = () => {
  const [getPubCuisines, setPubCuisines] = useState([]);
  const [getCategories, setCategories] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [filter, setFilter] = useState("");
  const pagination = handlePagination();

  async function fetchPubCuisines() {
    try {
      const { data } = await axios.get(
        `https://www.andylie.web.id/pub/cuisines/?page=${currentPage}&search=${search}&sort=${sort}&filter=${filter}`
      );
      // console.log(data);

      setPubCuisines(data?.data);
      setCurrentPage(data?.currentPage);
      setTotalPage(data?.totalPage);
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
    }
  }

  async function fetchCategories() {
    try {
      const { data } = await axios.get(
        `https://www.andylie.web.id/pub/categories/`
      );
      // console.log(data);

      setCategories(data?.data);
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
    }
  }

  useEffect(() => {
    fetchPubCuisines();
  }, [currentPage, sort, filter]);

  useEffect(() => {
    fetchCategories();
  }, []);

  function handlePagination() {
    let arr = [];
    for (let i = 1; i <= totalPage; i++) {
      arr.push(i);
    }
    return arr;
  }

  function handlePrev() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    if (currentPage < totalPage) setCurrentPage(currentPage + 1);
  }

  function handlerSearch(e) {
    e.preventDefault();
    fetchPubCuisines();
  }

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
        {/* <!-- First Section --> */}
        <section className="px-4 py-32 text-center text-white bg-gradient-to-r from-blue-600/20 via-transparent to-orange-600/20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              Website Project Restaurant
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              This project was made from monday and has to finish in 1 week, Of
              course i will burn out :).
            </p>
            <a
              href="/#allC"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 px-10 py-4 rounded-full text-white font-bold text-lg transition duration-200 inline-block transform hover:-translate-y-1"
            >
              Get to Cuisines
            </a>
          </div>
        </section>

        {/* <!-- Feature Section --> */}
        <div className="max-w-6xl py-12 mx-auto">
          <section className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border border-gray-700/50 shadow-xl text-white">
            {/* <!-- Search --> */}
            <form onSubmit={handlerSearch}>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search cuisines name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-700/80 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-600/50 transition duration-200"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </form>

            <div className="grid md:grid-cols-2 gap-6">
              {/* <!-- Filter --> */}
              <select
                value={filter}
                className="text-center bg-gray-700/80 rounded-lg py-2 focus:ring-2 focus:ring-orange-500 border border-gray-600/50 transition duration-200"
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="" disabled>
                  Filter
                </option>
                <option value="">All</option>
                {getCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              {/* <!-- Sort --> */}
              <select
                value={sort}
                className="text-center bg-gray-700/80 rounded-lg py-2 focus:ring-2 focus:ring-orange-500 border border-gray-600/50 transition duration-200"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="" disabled>
                  Sort
                </option>
                <option value="">Default</option>
                <option value="name">Name (A-Z)</option>
                <option value="-name">Name (Z-A)</option>
                <option value="price">Price (Low to High)</option>
                <option value="-price">Price (High to Low)</option>
              </select>
            </div>
          </section>
        </div>

        {/* <!-- All Cuisines --> */}
        <section
          className="px-4 py-12 text-white bg-gradient-to-b from-transparent to-gray-800/50"
          id="allC"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 via-white to-orange-500 bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(1px 0.5px 0.5px rgba(255, 255, 255, 0.932))",
              }}
            >
              ALL CUISINES
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {getPubCuisines?.map((cuisine) => {
                return <HomeCard key={cuisine.id} cuisine={cuisine} />;
              })}
            </div>
          </div>
        </section>

        {/* <!-- Pagination --> */}
        <div className="flex justify-center items-center gap-2 bg-gray-800/50 p-4 rounded-xl">
          <button
            className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-200 text-gray-400 disabled:bg-orange-500"
            onClick={handlePrev}
            disabled={currentPage == 1}
          >
            <span>
              <i class="fa-solid fa-backward text-white"></i>
            </span>
          </button>
          <div className="flex gap-2">
            {pagination?.map((page) => {
              return (
                <button
                  type="button"
                  className={
                    page === currentPage
                      ? "px-4 py-2 rounded-lg bg-orange-500 text-white"
                      : "px-4 py-2 rounded-lg bg-gray-700 hover:bg-orange-600 text-gray-300 transition duration-200"
                  }
                  key={page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            className="p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-200 text-gray-400 disabled:bg-orange-500"
            onClick={handleNext}
            disabled={currentPage >= totalPage}
          >
            <span>
              <i class="fa-solid fa-forward text-white"></i>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
