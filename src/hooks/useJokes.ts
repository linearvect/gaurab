import { useState } from "react";
import type { JokesDetail } from "../Types/HashnodeGraphQL";

const URL = "https://official-joke-api.appspot.com/jokes/random"


const useJokes = () => {

    const [showJoke, setShowJoke] = useState<boolean>(false)
    const [joke, setJoke] = useState<JokesDetail | null>(null)
    const [refetchJoke, setRefetchJoke] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchJoke = async () => {
        setLoading(true)
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setJoke(data)
            setShowJoke(true)
        } catch (error) {
            console.error("Error fetching joke:", error)
            setJoke(null)
            setShowJoke(true) // Show error state
        } finally {
            setLoading(false)
        }
    }

    const handleToggle = () => {
        if (!showJoke) {
            fetchJoke() // Fetch joke when button is clicked
        } else {
            // Reset to show button again
            setShowJoke(false)
            setJoke(null)
        }
    }
    
    const ReFetchJoke = () => {
        setRefetchJoke(true)
        if(refetchJoke){
            fetchJoke()
        }
    }


    return {joke, loading, showJoke, refetchJoke, handleToggle, fetchJoke, ReFetchJoke}
}

export default useJokes