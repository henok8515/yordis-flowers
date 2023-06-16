function Banner1() {
  const background =
    "https://images.pexels.com/photos/566450/pexels-photo-566450.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load";
  const background1 =
    "https://images.pexels.com/photos/67567/bridal-bouquet-bride-bridal-bouquet-67567.jpeg?auto=compress&cs=tinysrgb&w=1600";
  const background2 =
    "https://images.pexels.com/photos/267360/pexels-photo-267360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className=" h-[700px] flex">
      <div className="w-1/3 flex justify-center items-center ">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
          className="transition duration-300 ease-in-out hover:scale-110 relative max-w-sm overflow-hidden h-3/4 w-full rounded-tr-[300px] rounded-bl-[100px]"
        ></div>
      </div>
      <div className="w-1/3  justify-center items-center flex flex-col">
        <p>Browse By Occasions</p>
        <p className="font-sans text-5xl font-thin hover:text-pink-300 hover:cursor-pointer mt-10">
          Anniversary
        </p>
        <p className="font-sans text-5xl font-thin hover:text-pink-300 hover:cursor-pointer mt-10">
          Birthday
        </p>
        <p className="font-sans text-5xl font-thin hover:text-pink-300 hover:cursor-pointer mt-10">
          Business
        </p>
        <p className="font-sans text-5xl font-thin hover:text-pink-300 hover:cursor-pointer mt-10">
          Congratulations
        </p>
        <p className="font-sans text-5xl font-thin hover:text-pink-300 hover:cursor-pointer mt-10">
          Get Well
        </p>
        <p className="font-sans text-5xl font-thin hover:text-pink-300 hover:cursor-pointer mt-10">
          Graduation
        </p>
      </div>
      <div className="w-1/3  flex flex-col justify-around ">
        <div
          style={{
            backgroundImage: `url(${background1})`,
            backgroundSize: "cover",
          }}
          className="mr-5 transition duration-300 ease-in-out hover:scale-110 relative max-w-sm overflow-hidden rounded-tl-[100px] rounded-br-200px  h-1/2 w-4/6  self-end"
        ></div>

        <div
          style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: "cover",
          }}
          className="transition duration-300 ease-in-out hover:scale-110 relative max-w-sm overflow-hidden  rounded-b-[100px]  h-1/3 w-2/4 self-center "
        ></div>
      </div>
    </div>
  );
}

export default Banner1;
