import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext();

const NoticiasProvider = ( {children} ) => {

    const [ categoria, setCategoria ] = useState('general');
    const [ noticias, setNoticias ] = useState([]);
    const [ pagina, setPagina ] = useState(1);
    const [ totalNoticias, setTotalNoticias ] = useState(0);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(url);

            setTotalNoticias(data.totalResults);
            setNoticias(data.articles);
            setPagina(1);
        }
        consultarAPI();
    }, [categoria])

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ve&page=${pagina}&category=${categoria}&pageSize=20&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios(url);

            setTotalNoticias(data.totalResults);

            setNoticias(data.articles)
        }
        consultarAPI();
    }, [pagina])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    }

    const handleChangePagina = (e, valor) => {
        setPagina(valor);
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias,
                totalNoticias,
                handleChangePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext