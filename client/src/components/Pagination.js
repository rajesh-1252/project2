import React, { useState } from 'react';

function Pagination(obj) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const handlePageChange =  async(page, obj) => {
    setCurrentPage(page);
    // axios.get(`https://your-api-endpoint.com?page=${page}`)
    await fetch(obj)
      .then(response => {
        setData(response.data);
      });
  }

  return (
    <div>
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
