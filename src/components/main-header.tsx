import Container from "./container"
import Logo from "../assets/images/galeria-plus-full-logo.svg?react"
import { Link } from "react-router"
import cx from "classnames"
import Button from "./button"
import { PhotosSearch } from "./photos-search"
import Divider from "./divider"
import { PhotoNewDialog } from "../contexts/photos/components/photo-new-dialog"

interface MainHeaderProps extends React.ComponentProps<typeof Container> {}

export function MainHeader({ className, ...props }: MainHeaderProps) {
  return (
    <Container
      as="header"
      className={cx("flex justify-between items-center gap-10 max-md:flex-col", className)}
      {...props}
    >
      <Link to="/">
        <Logo className="h-5" />
      </Link>

      <PhotosSearch />
      <Divider orientation="vertical" className="h-10 max-md:hidden" />

      <div className="flex items-center gap-3">
        <PhotoNewDialog trigger={<Button>Nova foto</Button>} />
        <Button variant="secondary">Criar álbum</Button>
      </div>
    </Container>
  )
}