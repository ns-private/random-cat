"use client";

import { useState } from "react";
import Image from "next/image";
import { fetchImage } from "./fetch-image";
import styles from "./cat-image.module.css";

type CatImageProps = {
  url: string;
};
 
export function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState<string>(url);
 
  const refreshImage = async () => {
    setImageUrl(""); // 初期化
    const image = await fetchImage();
    setImageUrl(image.url);
  };
 
  return (
    <div className={styles.page}>
      <button onClick={refreshImage} className={styles.button}>
        One More Cat!
      </button>
      <div className={styles.frame}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="ランダムな猫の画像"
            width={500}
            height={400}
            className={styles.img}
            priority
          />
        )}
      </div>
    </div>
  );
}