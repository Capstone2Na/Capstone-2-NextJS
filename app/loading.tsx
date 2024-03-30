import Image from "next/image";
import dynamic from "next/dynamic";
const Loading = () => {
  return (
    <div className=" w-full h-full grid place-items-center">
      <Image src={"/loading.gif"} alt="...Loading" height={70} width={70} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Loading), { ssr: true });
