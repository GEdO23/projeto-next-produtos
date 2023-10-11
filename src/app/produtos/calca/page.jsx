import Image from "next/image";
import Link from "next/link";

export default function Calca() {
  const titulo = "CALÇA";
  const figCaption = titulo.toLowerCase();
  const imageStyle = {
    borderRadius: "15px",
  };

  return (
    <>
      <h1>{titulo}</h1>
      <figure>
        <Image
          src="/calca.jpg"
          width={500}
          height={500}
          style={imageStyle}
          alt="tenis"
        />
        <figcaption>Uma {figCaption}</figcaption>
      </figure>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
          perferendis esse excepturi veritatis pariatur, nulla quaerat. Quam
          natus voluptatibus accusamus voluptate soluta id optio sed quas
          voluptates! Iusto, ullam.
        </p>
        <Link href="/">Voltar...</Link>
      </div>
    </>
  );
}
