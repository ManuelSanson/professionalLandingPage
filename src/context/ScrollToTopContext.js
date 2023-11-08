import { createContext, useContext } from "react";


export const ScrollToTop = createContext();
export const useScrollToTop = () => useContext(ScrollToTop);

const ScrollToTopProvider = ({children}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <ScrollToTop.Provider value={{ scrollToTop }}>
            { children }
        </ScrollToTop.Provider>
    )
}

export default ScrollToTopProvider;