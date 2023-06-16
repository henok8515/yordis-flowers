import { Typography } from "@material-tailwind/react";
const background =
  "https://images.pexels.com/photos/931155/pexels-photo-931155.jpeg?auto=compress&cs=tinysrgb&w=1600";
function Banner() {
  return (
    <div className="flex ">
      <div className="flex text-start h-[700px] justify-center items-center flex-1 flex-col">
        <div className="w-4/6 transition ease-in-out delay-150 h-full  flex flex-col justify-center ">
          <Typography className="m-4 text-2xl ">WHO WE ARE</Typography>
          <Typography className="m-4 ml-6 text-4xl">
            Online Flower Delivery Experts
          </Typography>
          <Typography className="m-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Typography>
          <button className="bg-white w-1/3 shadow-lg text-black mt-5 hover:bg-pink-300 hover:text-white transition ease-in-out delay-150  font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
        className=" w-3/5 rounded-tl-[200px]"
      >
        {/* <img src={background} /> */}
      </div>
    </div>
  );
}

export default Banner;
