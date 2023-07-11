import Image from 'next/image';
import Loader from '@public/loader.svg';

function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <Image src={Loader} width={50} height={50} alt="loader" className="object-contain" />
    </div>
  );
}

export default Loading;
