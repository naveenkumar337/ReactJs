import React from 'react'
import pdffile from "../../Files/COMPUTER NETWORKS April 2017.pdf"

export default function PdfPage() {
    return (
        <div>
             <iframe
            src={pdffile}
            type="application/pdf" style={{height:"96vh",width:"100%"}}
          >
            {/* <embed type="application/pdf" /> */}
          </iframe>
        </div>
    )
}
