import React from 'react'

const DataPage = ({ params }: { params: { dataid: number } }) => {
  return (
    <div>{params.dataid}
      <aside></aside>
      <main></main>
    </div>
  )
}

export default DataPage