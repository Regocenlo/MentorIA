//Hook que controla los estados pero sobre todo hace la peticion de los ejercicios y los almacena en el localStorage
import { useState, useEffect } from "react"
import axios from "axios"

export function useGenerateChallenge(lenguaje, nivel) {

  const [ejercicios, setEjercicios] = useState(() => {

    // Intentamos recuperar del localStorage al iniciar
    const stored = localStorage.getItem("ejercicios")
    return stored ? JSON.parse(stored) : null
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Si faltan parámetros no hace nada
    if (!lenguaje || !nivel || ejercicios) return //En caso de extraer los ejercicios del localStorage, no hacemos la peticion

    const fetchChallenge = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await axios.post("/api/generate_challenge", {
          lenguaje,
          nivel,
        })

        setEjercicios(res.data)
        localStorage.setItem("ejercicios", JSON.stringify(res.data)) //Guardamos en localStorage
      } catch (err) {
        setError(err.message || "Error al generar desafío")
      } finally {
        setLoading(false)
      }
    }

    fetchChallenge()
  }, [lenguaje, nivel, ejercicios])
  //No colocamos ejercicios en las dependencias porque podria causar problemas. No le den bola al warning

  return { ejercicios, loading, error }
}
