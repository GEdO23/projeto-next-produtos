import Image from "next/image";
import Link from "next/link";

export default function Tenis() {
  const titulo = "TÊNIS";
  const figCaption = titulo.toLowerCase();
  const imageStyle = {
    borderRadius: "15px",
  };

  return (
    <>
      <h1>{titulo}</h1>
      <figure>
        <Image 
            src="/tenis.jpg" 
            width={500} 
            height={500} 
            style={imageStyle}
            alt="tenis" 
        />
        <figcaption>Um {figCaption}</figcaption>
      </figure>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem!
          Aut, eos eum eligendi explicabo perspiciatis mollitia! Dolore sed
          optio, sequi dolorem culpa commodi odit, earum placeat at, non
          voluptatem?
        </p>
        <Link href="/">Voltar...</Link>
      </div>
    </>
  );
}
