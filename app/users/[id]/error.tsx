"use client"

export default function Error({
    error,
    reset
}){
    console.log(error)
    return(
        <>
            <h3>Failed to load page</h3>
            <button onClick={reset}>Try again</button>
        </>
    )
}