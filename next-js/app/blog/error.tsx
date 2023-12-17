'use client'
import React from "react";


export default function ErrorWrapper({error} : {error : Error}) { 
    return <h1>Oops!! {error.message}</h1>
}