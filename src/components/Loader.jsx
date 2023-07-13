import Image from 'next/image';
import Loader from '@public/loader.svg';

function LoaderComponent() {
  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <Image src={Loader} width={50} height={50} alt="loader" className="object-contain" />
    </div>
  );
}

export default LoaderComponent;
