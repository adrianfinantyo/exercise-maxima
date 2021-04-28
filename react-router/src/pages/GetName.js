import { useParams } from "react-router"

const GetName = () => {
    let { name } = useParams()
    return <h1>Nama saya: { name }</h1>
}

export default GetName