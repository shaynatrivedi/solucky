// src/components/Flipbook.jsx
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Flipbook.css";

// point pdfjs to the worker bundle
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Flipbook = () =>{
  const [numPages, setNumPages] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageIndex(1);
  }

  function prev() {
    setPageIndex(p => Math.max(1, p - 2));
  }
  function next() {
    setPageIndex(p => Math.min(numPages - (numPages % 2 === 0 ? 1 : 0), p + 2));
  }

  return (
    <div className="flipbook-overlay">
      <button className="flipbook-close" onClick={onClose}>✕</button>
      <div className="flipbook-container">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="flipbook-pages">
            <Page pageNumber={pageIndex} className="flip-page" />
            {pageIndex + 1 <= numPages && (
              <Page pageNumber={pageIndex + 1} className="flip-page" />
            )}
          </div>
        </Document>
        <button className="flip-nav prev" onClick={prev} disabled={pageIndex === 1}>‹</button>
        <button className="flip-nav next" onClick={next} disabled={pageIndex + 1 > numPages}>›</button>
        <div className="flip-counter">
          {pageIndex}–{Math.min(pageIndex + 1, numPages)} of {numPages}
        </div>
      </div>
    </div>
  );
}

export default Flipbook;