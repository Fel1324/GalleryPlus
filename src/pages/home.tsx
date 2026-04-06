import Container from "../components/container";
import { PhotoWidget } from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export function Home() {
  return (
    <Container>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(10.875rem,1fr))] gap-8">
        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />

        <PhotoWidget
          photo={{
            id: '123',
            title: 'Japan',
            imageId: 'portrait-tower.png',
            albums: [
              {id: '123321', title: 'Album 1'},
              {id: '123123', title: 'Album 2'},
              {id: '321123', title: 'Album 3'},
            ]
          }}
        />                                                                
      </div>
    </Container>
  )
}