import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSwiper from "./components/Swiper";
import { useReducer } from "react";
// import { INITIAL_STATE, storeReducer } from "./utils/storeReducer";

function App() {
  // const [state, dispatch] = useReducer(storeReducer, INITIAL_STATE);

  return (
    <>
      <Header />
      <main className="my-5">
        <div className=" max-tab:flex-col max-tab:mx-0 flex max-tab:gap-7 gap-20 mx-40 max-nm:mx-10 items-center">
          <div className="flex-1">
            <ImageSwiper />
          </div>
          <div className="max-tab:px-5">
            <h2 className="text-orange font-bold mb-4">SNEAKER COMPANY</h2>
            <h1 className="text-5xl max-tab:text-3xl font-bold mb-2">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-dark-grayish-blue">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="mt-5">
              <p className="text-2xl font-bold inline pr-3">$125.00</p>
              <span className="text-orange font-bold text-sm p-1 rounded-md bg-pale-orange">
                50%
              </span>
            </div>
            <s className="test-2xl text-dark-grayish-blue font-bold">$250.00</s>

            <div className="md:flex max-sm:justify-center gap-20 mt-5">
              <div className="max-md:items-center max-md:flex max-md:mb-3">
              <div className="bg-light-grayish-blue max-md:py-3 px-4 gap-10 rounded-xl flex items-center">
                <img className="px-2 cursor-pointer" src="assets/icons/icon-minus.svg" alt="minus" />
                  <span className="font-semibold text-2xl">0</span>
                <img className="px-2 cursor-pointer" src="assets/icons/icon-plus.svg" alt="plus" />
              </div>
              </div>
              <button className="px-10 py-4 bg-orange text-white flex rounded-xl">
                <img className="pr-2" src="assets/icons/icon-cart-white.svg" alt="cart" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
