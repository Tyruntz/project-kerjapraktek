import React from 'react'

const ListPesanan = (props) => {
    
  return (
    <>
    <div className="grid h-14 w-full grid-cols-6 content-center justify-items-center gap-2 rounded-md bg-red-400 p-5">
  <p>{props.id}</p>
  <p>
    {props.nama}
  </p>
  <p>
    {props.items
    }x{props.jumlah}
  </p>
  <p>
    
  </p>
  <p>
    {props.nomeja}
  </p>
  <p>
    {props.total}
  </p>
</div>

    </>
  )
}

export default ListPesanan