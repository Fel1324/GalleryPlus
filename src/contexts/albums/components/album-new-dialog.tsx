import Button from "../../../components/button";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import { InputText } from "../../../components/input-text";
import Text from "../../../components/text";

import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";
import { PhotoImageSelectable } from "../../photos/components/photo-image-selectable";
import { usePhotos } from "../../photos/hooks/use-photos";
import { useForm } from "react-hook-form";
import { albumNewFormSchema, type AlbumNewFormSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import { useAlbum } from "../hooks/use-album";

interface AlbumNewDialogProps {
  trigger: React.ReactNode
}

export function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
  const [modalOpen, setIsModalOpen] = useState(false)

  const form = useForm<AlbumNewFormSchema>({
    resolver: zodResolver(albumNewFormSchema)
  })
  const { photos, isLoadingPhotos } = usePhotos()
  const { createAlbum } = useAlbum()
  const [isCreatingAlbum, setIsCreatingAlbum] = useTransition()

  useEffect(() => {
    if(!modalOpen) {
      form.reset()
    }
  }, [modalOpen, form])

  function handleTogglePhoto(photoId: string) {
    const photoIds = form.getValues("photosIds") || []
    const photoSet = new Set(photoIds)

    if(photoSet.has(photoId)) {
      photoSet.delete(photoId)
    } else {
      photoSet.add(photoId)
    }

    form.setValue("photosIds", Array.from(photoSet))
  }

  function handleSubmit(payload: AlbumNewFormSchema) {
    setIsCreatingAlbum(async () => {
      await createAlbum(payload)
      setIsModalOpen(false)
    })
  }

  return (
    <Dialog open={modalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <DialogHeader>Criar álbum</DialogHeader>

          <DialogBody className="flex flex-col gap-5">
            <InputText
              placeholder="Adicione um título"
              error={form.formState.errors.title?.message}
              {...form.register("title")}
            />

            <div className="space-y-3">
              <Text variant="label-small" className="inline-block">Fotos cadastradas</Text>

              {!isLoadingPhotos && photos && photos.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {photos.map(photo => (
                    <PhotoImageSelectable
                    key={photo.id}
                    src={`${import.meta.env.VITE_IMAGES_URL}/${photo.imageId}`}
                    title={photo.title}
                    imageClassName="w-21 h-21"
                    onSelectImage={() => handleTogglePhoto(photo.id)}
                    />
                  ))}
                </div>
              )}

              {!isLoadingPhotos && photos.length === 0 && (
                <div className="w-full flex flex-col justify-center items-center gap-3">
                  <SelectCheckboxIllustration />
                  <Text variant="paragraph-medium" className="text-center">Nenhuma foto disponível para seleção</Text>
                </div>
              )}

              {isLoadingPhotos && (
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={`photo-loading-${index}`} rounded="lg" className="w-21 h-21" />
                  ))}
                </div>
              )}
            </div>
          </DialogBody>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancelar</Button>
            </DialogClose>
            
            <Button
              type="submit"
              disabled={isCreatingAlbum}
              handling={isCreatingAlbum}
            >
              {isCreatingAlbum ? "Criando..." : "Criar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}