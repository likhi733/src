import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstname:"priya",
        secondname:"sravani"
    }
    return (
        <div>
            <AndhraBank info={data}/>
            <CorporationBank info={data}/>
            <h1>UnionBank</h1>
        </div>
    )
}

