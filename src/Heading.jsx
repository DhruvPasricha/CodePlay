import React from 'react'

export default function Heading(prop) {
    const { name } = prop;
    return (
        <div className="heading">
            <button> {name} </button>
        </div>
    )
}
