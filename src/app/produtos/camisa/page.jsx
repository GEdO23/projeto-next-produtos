import Image from "next/image";
import Link from "next/link";

export default function Camisa() {
  const titulo = "CAMISA";
  const figCaption = titulo.toLowerCase();
  const imageStyle = {
    borderRadius: "15px",
  };

  return (
    <>
      <h1>{titulo}</h1>
      <figure>
        <Image 
          src="/camisa.jpg" 
          width={500} 
          height={500} 
          style={imageStyle}
          alt="tenis" 
        />
        <figcaption>Uma {figCaption}</figcaption>
      </figure>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos error,
          placeat dignissimos incidunt assumenda eligendi quae quos
          exercitationem quam iusto, sint libero unde doloremque, illo alias
          excepturi necessitatibus nemo. Explicabo?
        </p>
        <Link href="/">Voltar...</Link>
      </div>
    </>
  );
}
