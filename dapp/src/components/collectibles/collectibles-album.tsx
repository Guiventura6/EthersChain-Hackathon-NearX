import { Sticker } from "@/actions/stickers-get";
import CollectiblesStickers from "./collectibles-stickers";

export default async function CollectiblesAlbum({
  stickers,
}: {
  stickers: Sticker[];
}) {
  return (
    <div>
      <CollectiblesStickers stickers={stickers} />
    </div>
  );
}
