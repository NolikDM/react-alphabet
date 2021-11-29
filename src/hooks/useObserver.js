import {useEffect, useRef} from "react";

// canLoad - флаг
export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();
        var cb = function(entries, observer) {
            // && page < totalPages
            if(entries[0].isIntersecting && canLoad) {
                // setPage(page + 1)
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
    }, [isLoading])
}