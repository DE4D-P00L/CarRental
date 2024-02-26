import PageTransition from "../Animations/PageTransition";
import carImage from "../assets/car.png";

const Home = () => {
  return (
    <PageTransition className="max-w-7xl mx-auto max-h-[calc(100vh-60px)] h-screen flex justify-center items-center">
      <div className="flex px-7 sm:flex-row flex-col">
        <div className="flex-1 flex justify-center items-center">
          <div>
            <h1 className="font-bold text-5xl mb-4">
              Looking to save more on your rental car?
            </h1>
            <h2 className="text-2xl italic">
              Seemless car booking at your finger tips
            </h2>
            <p className="text-xl font-thin">
              Discover <span className="font-semibold">Wheelocity</span> for
              affordabe car rental options.
            </p>
            <p className="text-xl font-thin">
              Select from a wide range of car options.
            </p>
            <h3 className="text-3xl font-semibold mt-4 sm:block hidden">
              Book in 4 simple steps
            </h3>
            <ul className="timeline sm:flex hidden">
              <li>
                <div className="timeline-start">Step 1</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Login</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">Step 2</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
                  Browse Inventory
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">Step 3</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
                  Select Car to rent
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start">Step 4</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Pay and confirm</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 place-content-center relative z-10 overflow-hidden sm:grid hidden">
          <img src={carImage} alt="" className="z-[11]" />
          {/* <div className="bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 absolute w-[350px] h-full -z-1 left-1/2 -translate-x-1/2 hidden md:block" /> */}
        </div>
      </div>
    </PageTransition>
  );
};
export default Home;
