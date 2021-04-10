import { React, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import "./BankDetails.css"

function BankDetails() {
    let location = useLocation()
    let data = location.data
    console.log(data)
   
    if (data) {
        return (
            <div className="main container">
                <h5 className="text-center font-weight-bold pb-3"><span className="values">{data[0].bank_name}</span></h5>
                <p>Ifsc Code :  <span>{data[0].ifsc}</span></p>
                <p>Bank Id :  <span>{data[0].bank_id}</span></p>
                <p>Branch :  <span>{data[0].branch}</span></p>
                <p>City :  <span>{data[0].city}</span></p>
                <p>District :  <span>{data[0].district}</span></p>
                <p>State :  <span>{data[0].state}</span></p>
                <p>Full address :  <span>{data[0].address}</span></p>
            </div>
        )
    } else {
        return null;
    }
}
export default BankDetails;