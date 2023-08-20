import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    return (
    <div>
        <h1>Ha ocurrido un Error</h1>
        <h2>{useRouteError()}</h2>
    </div>
    )
}