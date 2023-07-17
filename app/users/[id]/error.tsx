"use client"

// NTS: revise this syntax
export default function Error({
    error,
    reset,
  }: {
    error: Error;
    reset: () => void;
  }){
    console.log(error)
    return(
        <>
            <h3>Failed to load page</h3>
            <button onClick={reset}>Try again</button>
        </>
    )
}