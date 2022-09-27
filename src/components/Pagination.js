import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import ProductPaginated from './ProductPaginated';

const AllPagination = ({cards, RenderComponent, title, pageLimit, dataLimit}) => {
    const [pages] = React.useState(Math.round(cards.length / dataLimit));
    const [activePage, setActivePage] = React.useState(1);

    const nextPage = () => {
        setActivePage(page => page + 1);
    }

    const previousPage = () => {
        setActivePage(page => page - 1)
    }

    const changePage = event => {
        const pageNumber = Number(event.target.textContent);
        setActivePage(pageNumber);
    }

    const getPaginatedData = () => {
        const start = activePage * dataLimit - dataLimit;
        const end = start + dataLimit;
        return cards.slice(start, end);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((activePage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
      };

    //   {console.log(props)}

      return (
        <div>
      
          {/* show the posts, 10 posts at a time */}
          {/* <div className="dataContainer">
            {getPaginatedData().map((d, idx) => (
              <RenderComponent key={idx} data={d} />
            ))}
          </div> */}

          <ProductPaginated products={getPaginatedData()}/>
      
          {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
          <div className="pagination">
            {/* previous button */}
            <button
              onClick={previousPage}
              className={`prev ${activePage === 1 ? 'disabled' : ''}`}
            >
              prev
            </button>
      
            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${activePage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
      
            {/* next button */}
            <button
              onClick={nextPage}
              className={`next ${activePage === pages ? 'disabled' : ''}`}
            >
              next
            </button>
          </div>
        </div>
      );
}

export default AllPagination;