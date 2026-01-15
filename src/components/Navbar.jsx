import React from 'react'
import { useEffect } from 'react'

const Navbar = ({ color }) => {
    // Case:1 Run on every render
    useEffect(() => {
        alert("Hey I will run on every render!")

    })
    // CAase:2 Run only on first render
    useEffect(() => {
        alert("Hey I will run only on first render!")
    }, [])

    // Case:3 Run only when certain values changes
    useEffect(() => {
        alert("Hey I am running because color was changed!")
    }, [color])

    return (
        <div>I am Navber of {color} color...</div>
    )
}

export default Navbar