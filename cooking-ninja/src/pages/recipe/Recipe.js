import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import './Recipe.css'

export default function Recipe() {
  const {id} = useParams()
  const {data: recipe , isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`)

  return (
    <div className="recipe">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <h1>{recipe.title}</h1>
      )}
    </div>
  )
}
