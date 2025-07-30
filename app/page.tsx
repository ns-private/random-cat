import Image from "next/image";
import { CatImage } from "./cat-image";
import { fetchImage } from "./fetch-image";

export default async function Home() {

  const image = await fetchImage();

  console.log("Home: 画像情報を取得しました", image);

  return <CatImage url={image.url} />;
}
