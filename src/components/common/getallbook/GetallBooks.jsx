import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './getbook.css';

function GetAllPDFs() {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/books/files')
      .then(response => {
        setPdfs(response.data.files);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDownload = id => {
    window.open(`http://localhost:4000/api/books/download/${id}`);
  };

  return (
    <>
      <h1>library / Books</h1>
      <input style={{width:  '500px', height:'30px',border:'none ', boxShadow:'4px 4px 4px navy', fontSize:'20px', marginTop: '10px'}} type="text" placeholder='Type the Book...'  />
      <div className="getbook">
        <div style={{paddingTop:'60px'}} className="books_mother">
          <ul className="allbooks" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {Array.isArray(pdfs) && pdfs.map(pdf => (
              <li style={{padding:'30px'}} className="list_books" key={pdf._id}>
                <div className="mother_div">
                  <h3 style={{paddingBottom:'20px'}}>{pdf.name}</h3>
                  {/* <label htmlFor="">{pdf.description}</label> */}
                  {pdf.picture && (
                    <img
                      src={`http://localhost:4000/${pdf.picture.path}`}
                      alt={pdf.picture.filename}
                    />
                  )}
                  {pdf.pdf && (
                    <button style={{color:'whitesmoke'}} onClick={() => handleDownload(pdf._id)}>
                      Download 
                    </button>
                  )}
                  {pdf.price && <p>Price: ${pdf.price}</p>}
                  <hr />
                </div>
              </li>
            ))}
          </ul>

        </div>
      
      </div>
    </>
  );
}

export default GetAllPDFs;
