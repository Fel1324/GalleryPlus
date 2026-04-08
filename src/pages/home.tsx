import Container from "../components/container";
import { AlbumsFilter } from "../contexts/albums/components/albums-filter";
import { PhotosList } from "../contexts/photos/components/photos-list";

export function Home() {
  return (
    <Container>
      <AlbumsFilter albums={[]} className="mb-9.5" loading />

      <PhotosList
        photos={[]}
        loading
      />
    </Container>
  );
}
