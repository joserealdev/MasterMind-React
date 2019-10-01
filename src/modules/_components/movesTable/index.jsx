// Libs
import React from 'react'
import LITERALS from 'commons/constants/literals'
import styles from './movesTable.css'

/** MovesTable component description. */
const MovesTable = ({ moves }) => {
  const movesTag = moves.map((move) => (
    <tr key={ move.id }>
      <td>{ move.combination }</td>
      <td>{ move.correctPosition }</td>
      <td>{ move.coincidence }</td>
    </tr>
  ))

  return (
    <table className={ styles.table }>
      <thead>
        <tr>
          <th>{LITERALS.COMBINATION}</th>
          <th>{LITERALS.CORRECTPOSITION}</th>
          <th>{LITERALS.COINCIDENCE}</th>
        </tr>
      </thead>
      <tbody>
        { movesTag }
      </tbody>
    </table>
  )
}

export default MovesTable
