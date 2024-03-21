import { Sticker } from "@/actions/stickers-get";
import Image from "next/image";
import Link from "next/link";
import styles from "./collectibles-album.module.css";

export default async function CollectiblesStickers({
  stickers,
}: {
  stickers: Sticker[];
}) {
  return (
    <ul className={`${styles.album} animeLeft`}>
      {stickers.map((sticker, i) => (
        <li key={sticker.id + 1}>
          <Link href={`/stiker/${sticker.id}`} scroll={false}>
            <Image
              src={sticker.image}
              width={1500}
              height={1500}
              alt={sticker.name}
              sizes="80vw"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
