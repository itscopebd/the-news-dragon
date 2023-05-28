import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
document.title=`${title}-the dragon news`;
    },[title])
}

export default useTitle;