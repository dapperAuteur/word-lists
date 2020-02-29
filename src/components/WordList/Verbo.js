import React from "react"
import {useHistory} from "react-router-dom"

export default function Verbo({verbo}) {
  const history = useHistory();
  const viewVerbo = (verboId) => {
    history.push({
      pathname: '/view',
      search: `?verboID=${verboId}`
    })
  }
  return (
    <div className="card col-12 mb-3">
      <div className="card-body" onClick={() => viewVerbo(verbo.verboID)} style={{cursor: "pointer"}}>
        <h5 className="card-title">Verbo: {verbo.spanish}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {verbo.english}
        </h6>
      </div>
    </div>
  )
}