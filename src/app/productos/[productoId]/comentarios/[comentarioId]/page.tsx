export default function ComentarioDetalle({ params }: {
  params: {
    productoId: string;
    comentarioId: string
  }
}) {
  return (
    <div>
      <h1>Comentario {params.comentarioId} del producto {params.productoId}</h1>
    </div>
  )
}




