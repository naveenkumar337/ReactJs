import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "./Step0Data";
function Step0Components() {debugger
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState("");
  var _data = Data;
  var _data = Text_Filter(_data, filterText);
  var _pages = Pagination_records(_data, currentPage, pageSize);
  var _data = MapRecords(_data, _pages.startIndex, _pages.endIndex + 1);
  // console.log(_pages);
  console.log(currentPage);
  return (
    <>
      <div className="container-fluid step0list">
        <div className="row mb-5">
          <div className="d-flex justify-content-between mb-2">
            <label className="">
              Show &nbsp;
              <select onChange={(e) => setPageSize(parseInt(e.target.value))}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              &nbsp; Entries
            </label>
            <label className="">
              Search:&nbsp;
              <input
                type="text"
                onChange={(e) => setFilterText(e.target.value)}
                className="form-control-sm"
              />
            </label>
          </div>
         
          <div className="table">
            <table className="table table-table-responsive-sm table-sm table-sort table-striped table-bordered">
              <thead>
                <tr>
                  <th>File Path</th>
                  <th>Total Pages</th>
                  <th>Assigned To</th>
                  <th>BulkPdfAddedTime</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {_data.length > 0 ? (
                  _data.map((e) => (
                    <tr>
                      <td>{e.FilePath}</td>
                      <td>{e.TotalPages}</td>
                      <td>{e.AssignedTo}</td>
                      <td>{e.BulkPdfAddedTime}</td>
                      <td>
                        <Link to="/step1view" className="btn btn-primary">
                          Start
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="text-center">
                    <td colSpan="5">No Data Found !...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className={`d-flex table-pagination justify-content-between ${_pages.pages.length>0?'':'d-none'}`}>
            <label>{`Showing ${_pages.startIndex + 1} to ${
              _pages.endIndex + 1
            } out of ${_pages.totalRecords} records`}</label>
            <ul className="pagination justify-content-end" >
              <li className={`page-item ${_pages.currentPage===1?'disabled':''}`}>
                <a
                  className="page-link"
                  tabIndex="-1"
                  onClick={(e) => setCurrentPage(_pages.currentPage - 1)}
                >
                  Prev
                </a>
              </li>
              {_pages.pages.map((i) => (
                <li className={`page-item ${i===_pages.currentPage? `active`:''}`}>
                  <a
                    className="page-link"
                    onClick={(e) => setCurrentPage(+e.target.text)}
                  >
                    {i}
                  </a>
                </li>
              ))}

              <li className={`page-item ${_pages.currentPage===_pages.totalPages?'disabled':''}`}>
                <a
                  className="page-link"
                  onClick={(e) => setCurrentPage(_pages.currentPage + 1)}
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function MapRecords(_data, startIndex, endIndex) {
  return _data.slice(startIndex, endIndex);
}

function Text_Filter(_data, text) {
  return _data.filter((rec) => {
    var keys = Object.keys(rec);
    console.log(rec);
    console.log(keys);
    return keys.some((key) => {
      if (typeof rec[key] == "string") return rec[key].includes(text);
      else return rec[key] === parseInt(text);
    });
  });
}

function Pagination_records(_data, currentPage, pageSize) {
  debugger;
  var totalRecords = _data ? _data.length : 0;
  var totalPages = Math.ceil(totalRecords / pageSize);
  let startPage = 1,
    endPage = totalPages;
  let maxPages = 10;
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > totalPages) {
    currentPage = totalPages;
  }
  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentpage = Math.ceil(maxPages / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentpage >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentpage;
    }
  }
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalRecords - 1);
  debugger;
  let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );
  return {
    totalRecords,
    currentPage,
    pageSize: pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
  };
}
export default Step0Components;
