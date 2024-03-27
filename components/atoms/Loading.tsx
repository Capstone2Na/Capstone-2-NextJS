import Image from "next/image";
import dynamic from "next/dynamic";
const Loading = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full grid place-items-center">
      <Image src={"/loading.gif"} alt="...Loading" height={70} width={70} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Loading), { ssr: true });
