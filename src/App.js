import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSwiper from "./components/Swiper";

function App() {
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
              <p className="text-2xl font-bold inline pr-3">$123.00</p>
              <span className="text-orange font-bold text-sm p-1 rounded-md bg-pale-orange">50%</span>
            </div>
            <s className="test-2xl text-dark-grayish-blue font-bold">$250.00</s>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
