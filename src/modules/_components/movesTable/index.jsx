import React, { useState } from 'react'
import classNames from 'classnames/bind'
import LITERALS from 'commons/constants/literals'
import styles from './movesTable.css'

const cx = classNames.bind(styles)

/** MovesTable component description. */
const MovesTable = ({ moves }) => {
  const [isExpanded, changeExpanded] = useState(0)
  const movesTag = moves.map((move) => (
    <tr key={ move.id }>
      <td>{ move.combination }</td>
      <td>{ move.correctPosition }</td>
      <td>{ move.coincidence }</td>
    </tr>
  ))

  const classess = cx({
    container: true,
    expanded: isExpanded
  })

  return (
    <div className={ classess }>
      <button type="button" className={ styles.header } onClick={ () => changeExpanded(!isExpanded) }>
        <div className={ styles.movements }>
          {isExpanded ? LITERALS.HIDEMOVEMENTS : LITERALS.SHOWMOVEMENTS}
        </div>
      </button>
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
    </div>
  )
}

export default MovesTable
