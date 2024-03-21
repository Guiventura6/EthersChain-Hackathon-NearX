import stickersGet from "@/actions/stickers-get";
import CollectiblesAlbum from "@/components/collectibles/collectibles-album";

export default async function Album() {
  const data = await stickersGet();

  return (
    <>
      <section className="container">
        <div className="title">Album</div>
      </section>

      <section className="container mainContainer">
        <CollectiblesAlbum stickers={data} />
      </section>
    </>
  );
}
