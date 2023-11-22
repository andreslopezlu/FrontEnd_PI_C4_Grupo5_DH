import React from 'react'

function CardCategorias(props) {
    return (
        <div className='CardCategorias'>
            <div className='CardCategoriasImg'>
                <img src={`../imagenes/herramientas/${props.img}`} alt="" />
            </div>
            <div className='CardCategoriasP boton'>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default CardCategorias