import { useState, ChangeEvent, FormEvent } from 'react'
import './FormRegister.css'

interface FormData {
  user_name: string;
  user_direction: string;
  user_mail: string;
  user_instagram: string;
}

const FormRegister = () => {
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_direction: '',
    user_mail: '',
    user_instagram: ''
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch('/API para form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        alert('Formulario enviado con éxito!')
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario.')
      })
  }

  return (
    <section className="section-form">
      <form id="user-form" onSubmit={handleSubmit}>
        <label className="form-label">Registrarse</label>
        <ul>
          <li>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="direction">Dirección:</label>
            <input
              type="text"
              id="direction"
              name="user_direction"
              value={formData.user_direction}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="mail">Correo electrónico:</label>
            <input
              type="email"
              id="mail"
              name="user_mail"
              value={formData.user_mail}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="instagram">Instagram:</label>
            <input
              type="text"
              id="instagram"
              name="user_instagram"
              value={formData.user_instagram}
              onChange={handleChange}
            />
          </li>
          <li>
            <button type="submit">Enviar</button>
          </li>
        </ul>
      </form>
    </section>
  )
}

export default FormRegister
