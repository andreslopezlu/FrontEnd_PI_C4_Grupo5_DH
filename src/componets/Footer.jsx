import React from 'react'

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='divLogoFooter'>
          <img className='logoFooter' src="../imagenes/logo.png" alt="logo" />
        </div>
        <div className='footerContacto'>
          <h4>CONTACTO</h4>
          <div className='footerContactoDireccion'>
            <h5 className='footerH5'>Dirección:</h5>
            <p className='footerP'>123 Calle Principal</p>
            <p className='footerP'>Cuidad de Ejemplo, 12345</p>
            <p className='footerP'>Pais Ejemplo</p>
          </div>
          <div className='footerContactoTel'>
            <h5 className='footerH5'>Teléfono:</h5>
            <p className='footerP'>+1(555)123-4567</p>
          </div>
          <div className='footerContactoEmail'>
            <h5>Correo Electrónico:</h5>
            <p className='footerP'>info@tuempresa.com</p>
          </div>
        </div>
        <div className='noticiasFooter'>
          <h4>NOTICIAS</h4>
          <form 
          className='fomFooter'
          action=""
          >
            <input
              className='inputFooter'
              type="text"
              placeholder='Tu Correo'
            />
            <input
              className='botonFooter boton'
              type='submit'
              value="SUSCRIBETE"
            />
          </form>
        </div>
        <div className='siguenosFooter'>
          <h4>SIGUENOS</h4>
          <div className='footer_logos'>
            <img className='logoRedSocial' src="../imagenes/facebook.png" alt="logo_facebook" />
            <img className='logoRedSocial' src="../imagenes/messenger.png" alt="logo_messenger" />
            <img className='logoRedSocial' src="../imagenes/instagram.png" alt="logo_instagram" />
            <img className='logoRedSocial' src="../imagenes/whatsapp.png" alt="logo_whatsapp" />
            <img className='logoRedSocial' src="../imagenes/twitter.png" alt="logo_twitter" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer