

export const ItemListComment = ({ ...props }, { postID }) => {
    const { id_Comentario, Post_id, Comentario, FechaDePublicacion, id_Usuario, Nombre, A_Paterno } = props;

    return (
        <>
            <p>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${Post_id}`} aria-expanded="false" aria-controls="collapseExample">
                    Ver comentarios
                </button>
            </p>
            <div class="collapse" id={Post_id}>
                <div className="card card-body">
                    <div className="card-text">
                        <p>{Comentario}</p>
                        <p>{Nombre}</p>
                        <p>{A_Paterno}</p>
                        <p>{FechaDePublicacion}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
