import Image from "next/image";

export default function Home() {
  return (
    <main>
        <div className={'david-container'}>
            <Image alt={'David Coles'} height={100} src={'/images/david-coles.jpg'} width={100}></Image>
        </div>
        <div className="font-extralight text-9xl">David Coles</div>
    </main>
  );
}
