import Image from 'next/image'
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <>
      <center>
        <br />
        <Image
          src="/oficina.png"
          alt="Picture of the author"
          width={300}
          height={300}
        />
        <p>
          Bienvenido a mi <strong>Portafolio</strong><br /><br />
        </p>
        <Button variant="outlined"  color="primary">
          Sobre mí
        </Button>
      </center>
      <br />
      <br />
    </>
  )
}
