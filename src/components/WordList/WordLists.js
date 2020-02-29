import React from "react"
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks"
import queryString from "query-string"
import Verbo from "./Verbo"

const GET_ALL_VERBOS = gql`
  {
    queryVerbo{
      id
      tongue
      spanish
      english
      reflexive
      irregular
      categoria_de_irregular
      cambiar_de_irregular
      terminacion
      grupo
    }
  }
`

export default function WordLists(props) {
  let params, search = "";
  if (props.location.search !== "") {
    params = queryString.parse(props.location.search)
    search = params.search
  }
  // let query = GET_FILTERED_VERBOS
  if (search === "") {
    query = GET_ALL_VERBOS
  }
  const {loading, error, data} = useQuery(query, {variables: {search}, fetchPolicy: "network-only"});
  if (loading) {
    return "Fetching Verbos..."
  }
  if (error) {
    return `Error: ${error}`
  }
  const verbos = data.queryVerbo;

  return (
    <div className="container">
      {verbos.map(verbo =>(
        <Verbo key={verbo.verboID} verbo={verbo}/>
      ))}
    </div>
  )
}

