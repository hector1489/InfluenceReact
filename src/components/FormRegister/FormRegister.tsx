import { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.user_name || !formData.user_direction || !formData.user_mail || !formData.user_instagram) {
      alert('Por favor, complete todos los campos.')
      return
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('/API para form', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Success:', response.data)
      alert('Formulario enviado con éxito!')
    } catch (error) {
      console.error('Error:', error)
      alert('Hubo un error al enviar el formulario.')
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section-form">
      <form id="user-form" onSubmit={handleSubmit}>
        <h3 className="form-label">Registrarse</h3>
        <ul>
          <li>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
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
              required
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
              required
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
              required
            />
          </li>
          <li>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </li>
        </ul>
      </form>
    </section>
  )
}

export default FormRegister
