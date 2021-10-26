import React from 'react'
import Button from 'react-bootstrap/Button';
export default function Heading(prop) {
    const { name } = prop;
    return (
        <center>
            <div className="heading">
                {/* <Button variant="outline-secondary">{name}</Button>
                 */}
                {name}
            </div>
        </center>
    )
}
