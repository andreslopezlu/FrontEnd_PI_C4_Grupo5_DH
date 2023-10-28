import React from 'react'

function Categorias(props) {
    return (
        <div className='CardCategorias'>
            <div className='CardCategoriasImg'>
                <img src={`../imagenes/${props.img}`} alt="" />
            </div>
            <div className='CardCategoriasP'>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Categorias