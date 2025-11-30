import { useState, useEffect } from "react";
import axios from "axios";

export function useObtenerFeedback( desafio, codigo, output){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [respuesta, setRespuesta] = useState();

    useEffect(() => {
        const fetchFeedback = async () => {
            setLoading(true)
            setError(null)
            try {
                const res = await axios.post("/api/feedback_solution", {
                    desafio,
                    codigo,
                    output,
                });
                console.log(res.data);
                setRespuesta(res.data);
            } catch(err) {
                setError(err.message || "Error al realizar la consulta");
            } finally {
                setLoading(false);
            }
        };

        fetchFeedback();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [desafio, codigo, output]);
    return {respuesta, loading, error};
}