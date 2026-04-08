import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Photo } from "../models/photo";
import { PhotoWidget } from "./photo-widget";

interface PhotosListProps {
  photos: Photo[];
  loading?: boolean;
}

export function PhotosList({ photos, loading }: PhotosListProps) {
  return (
    <div className="space-y-6">
      <Text as="div" variant="paragraph-large" className="flex items-center justify-end gap-1 text-accent-span">
        Total:{" "}
        {!loading ? <div>{photos.length}</div> : <Skeleton className="w-6 h-6" />}
      </Text>

      {!loading && photos?.length > 0 && (
        <div className="grid grid-cols-5 gap-8 max-[57.1875rem]:grid-cols-4 max-[45.75rem]:grid-cols-3 max-[34.3125rem]:grid-cols-2">
          {photos.map((photo) => (
            <PhotoWidget key={photo.id} photo={photo} />
          ))}
        </div>
      )}

      {loading && (
        <div className="grid grid-cols-5 gap-8 max-[57.1875rem]:grid-cols-4 max-[45.75rem]:grid-cols-3 max-[34.3125rem]:grid-cols-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <PhotoWidget
              key={`photo-loading-${index}`}
              photo={{} as Photo}
              loading
            />
          ))}
        </div>
      )}

      {!loading && photos.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <Text variant="paragraph-large">Nenhuma foto encontrada</Text>
        </div>
      )}
    </div>
  );
}
