import React from 'react'

export default function Selector ({id, category}) {
    return (
            <option key={id} value={`${category}`}>{`${category}`}</option>
    )
}
