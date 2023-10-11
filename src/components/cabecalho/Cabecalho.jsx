import Link from "next/link";

export default function Cabecalho() {
  return (
    <div className="">
      <h2>PRODUTOS DISPONIVEIS</h2>
      <ul>
        <li>
          <Link href="/produtos/tenis">Tênis</Link>
        </li>
        <li>
          <Link href="/produtos/camisa">Camisa</Link>
        </li>
        <li>
          <Link href="/produtos/calca">Calça</Link>
        </li>
        <li>
          <Link href="/produtos/meia">Meia</Link>
        </li>
      </ul>
    </div>
  );
}
