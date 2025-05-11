import { useState, useEffect } from "react";
import Loading from "./Loading";
import MainContent from "./MainContent"; // Your main website content

const LoadingState = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simulating a delay before content loads
    }, []);

    return isLoading ? <Loading /> : <MainContent />;
};

export default LoadingState;