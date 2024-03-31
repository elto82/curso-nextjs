import { Metadata } from "next"
type Props = {
  params: {
    productoId: string
  }
}

export const generateMetadata = ({
  params,
}: Props): Metadata => {
  return {
    title: `Producto ${params.productoId}`,
  }
}

export default function DetalleProducto({
  params,
}: Props) {

  return (
    <div>
      <h1>Producto {params.productoId}</h1>
    </div>
  )
}




