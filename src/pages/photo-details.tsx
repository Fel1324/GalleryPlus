import { useParams } from "react-router";
import Text from "../components/text";

export function PhotoDetails() {
  const { id } = useParams()

  return (
    <>
      <Text variant="heading-medium">Página de detalhes</Text>
      <hr />
      <Text variant="heading-medium">ID da Foto: {id}</Text>
    </>
  )
}