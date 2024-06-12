import { useMemo, useCallback, useEffect } from "react"
import { getColor } from "./colors"
import { cn } from "./utils"
import React from "react"

interface RatingBoxProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    readOnly?: boolean
    onRating?: (rate: number) => void
    rating?: number
    setHoverRating?: React.Dispatch<React.SetStateAction<number>>
    setCurrColor?: React.Dispatch<React.SetStateAction<string>>
    hoverRating?: number
    theme?: {
        base: { bg: string, boxBg: string }
        bad: { bg: string, boxBg: string, fadeBg: string }
        normal: { bg: string, boxBg: string, fadeBg: string }
        good: { bg: string, boxBg: string, fadeBg: string }
    }
}

const RatingBox = ({ className, readOnly, onRating, rating, hoverRating, setHoverRating, setCurrColor, theme, ...props }: RatingBoxProps) => {


    const updateColor = useCallback((index: number) => {
        if (theme) {
            if (index <= 2) {
                setCurrColor && setCurrColor(theme.bad.bg)
            } else if (index === 3) {
                setCurrColor && setCurrColor(theme.normal.bg)
            } else {
                setCurrColor && setCurrColor(theme.good.bg)
            }
        }
    }, [rating]);
    const handleMouseEnter = useCallback((idx: number) => {
        if (setHoverRating && !readOnly) {
            setHoverRating(idx);
            updateColor(idx)
        }
    }, [setHoverRating, readOnly]);

    const handleMouseLeave = useCallback(() => {
        if (setHoverRating && !readOnly) {
            setHoverRating(0);
            updateColor(rating as number)
        }
    }, [setHoverRating, readOnly, onRating]);

    const handleClick = useCallback((idx: number) => {
        if (onRating && !readOnly) {
            onRating(idx);
        }
    }, [onRating, readOnly]);

    const barRate = useMemo(() => {
        return Array(5)
            .fill(0)
            .map((_, i) => i + 1)
            .map((idx) => (
                <div
                    className={cn(`p-[0.5rem] px-3 bg-[#3d3f3d] transition-all duration-200 cursor-pointer ${getColor({ rating, hoverRating, idx, theme })}`, { "cursor-default": readOnly }, className)}
                    key={idx}
                    onClick={() => handleClick(idx)}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseLeave()}
                ></div>
            ));
    }, [rating, hoverRating, className, handleClick, handleMouseEnter, handleMouseLeave, setCurrColor]);
    useEffect(() => {
        updateColor(rating as number)
    }, [rating])
    return (
        <React.Fragment {...props}>
            {barRate}
        </React.Fragment>
    )
}

export default RatingBox
