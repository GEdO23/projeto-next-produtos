import Image from "next/image";
import Link from "next/link";

export default function Meia() {
  const titulo = "MEIA";
  const figCaption = titulo.toLowerCase();
  const imageStyle = {
    borderRadius: "15px",
  };

  return (
    <>
      <h1>{titulo}</h1>
      <figure>
        <Image 
          src="/meia.jpg" 
          width={500} 
          height={500}
          style={imageStyle} 
          alt="tenis" 
        />
        <figcaption>Uma {figCaption}</figcaption>
      </figure>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
          dolorum ratione. Molestiae minima, ipsam sit adipisci veniam corporis
          pariatur perferendis fugit odio nihil aspernatur recusandae aperiam
          vero voluptates possimus eaque?
        </p>
        <Link href="/">Voltar...</Link>
      </div>
    </>
  );
}
