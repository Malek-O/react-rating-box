import { ReactElement, useState } from "react"
import { cn } from './utils'
import React from "react"
interface RatingWrapperProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    Skeleton?: boolean
    rating: number
    readOnly?: boolean
    onRating?: (rate: number) => void
    boxClassName?: string
    children: ReactElement;
    className?: string
    theme: {
        base: { bg: string, boxBg: string }
        bad: { bg: string, boxBg: string, fadeBg: string }
        normal: { bg: string, boxBg: string, fadeBg: string }
        good: { bg: string, boxBg: string, fadeBg: string }
    }
}

const RatingWrapper = ({ theme, rating, readOnly, onRating, className, children, ...props }: RatingWrapperProps) => {
    const [currColor, setCurrColor] = useState(theme.base.bg)
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div {...props} className={cn(`p-3 flex justify-center gap-2 ${currColor} ${hoverRating === 0 && rating === 0 && theme.base.bg}`, className)} >
            {React.cloneElement(children, { hoverRating, rating, onRating, setHoverRating, setCurrColor, theme })}
        </div>
    )
}

export default RatingWrapper