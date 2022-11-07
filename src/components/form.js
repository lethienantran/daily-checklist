import Header from "./Header";
import Content from "./Content";
const form = () => {
  return (
    <div className=" h-full w-full text-center lg:max-w-[1000px]   mx-auto flex justify-center">
      <div className="shadow-lg shadow-[#4F2C1DFF] w-2/3 sm:w-1/2 rounded-3xl bg-[#F1AC88FF] border-black border-8 h:1/2  sm:min-h-[468px] my-auto">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default form;
// h-1/3 md:h-3/5 mx-auto
