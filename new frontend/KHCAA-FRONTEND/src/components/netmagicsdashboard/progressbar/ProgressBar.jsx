
import React ,{useEffect,useRef} from 'react'
import './progressbar.scss'
function ProgressBar({value}) {
    const barInnerRef = useRef()

    useEffect(() => {
        barInnerRef.current.style.width = `${value}%`
    }, [value])

    return (
        <div className='progress-bar'>
            <div ref={barInnerRef} className="progress-bar__inner"></div>
        </div>
    )
}

export default ProgressBar
