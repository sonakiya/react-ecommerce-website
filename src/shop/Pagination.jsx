import React from 'react'


//some code is in the shop.jsx page

const Pagination = ({productsPerPage,totalProducts,paginate,activePage}) => {
  const pageNumber = [];
  for(let i=1;i<=Math.ceil(totalProducts/productsPerPage);i++){   //how many pages we will have
    pageNumber.push(i)
  }
  return (
    <ul className='default-pagination lab-ul'>
      <li>
        <a href="#" onClick={()=>{
          if(activePage<pageNumber.length){
            paginate(activePage-1)
          }
        }}>
          <i className='icofont-rounded-left'></i>
        </a>
      </li>
      {
        pageNumber.map((number)=>(
          <li key={number} className={`page-item ${number === activePage ? "bg-warning":""}`}>
            <button onClick={()=>paginate(number)} className='bg-transparent'>{number}</button>
          </li>
        ))
      }
       <li>
        <a href="#" onClick={()=>{
          if(activePage<pageNumber.length){
            paginate(activePage+1)
          }
        }}>
          <i className='icofont-rounded-right'></i>
        </a>
      </li>
    </ul>
  )
}

export default Pagination