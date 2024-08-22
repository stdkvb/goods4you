import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#484283"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperClass="loader"
    />
  );
};

export default Loader;
