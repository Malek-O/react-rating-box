interface colorProps {
    theme?: {
        base: { bg: string, boxBg: string }
        bad: { bg: string, boxBg: string, fadeBg: string }
        normal: { bg: string, boxBg: string, fadeBg: string }
        good: { bg: string, boxBg: string, fadeBg: string }
    }
    rating: number | undefined, hoverRating: number | undefined, idx: number | undefined
}
export const getColor = ({ rating, hoverRating, idx, theme }: colorProps) => {
    const rate = rating as number
    if (theme && hoverRating !== undefined && idx) {
        if (hoverRating >= idx) {
            if (hoverRating <= 2) {
                return theme.bad.boxBg;
            }
            if (hoverRating <= 3) {
                return theme.normal.boxBg;
            }
            if (hoverRating <= 5) {
                return theme.good.boxBg;
            }
        } else if (!hoverRating && rate >= idx) {
            if (rate <= 2) {
                return theme.bad.boxBg;
            }
            if (rate <= 3) {
                return theme.normal.boxBg;
            }
            if (rate <= 5) {
                return theme.good.boxBg;
            }
        }
        if (rate <= 5 && (hoverRating >= 1 && hoverRating <= 2)) {
            return theme.bad.fadeBg
        }
        if (rate <= 5 && hoverRating == 3) {
            return theme.normal.fadeBg;
        }
        if (rate <= 5 && (hoverRating >= 4 && hoverRating <= 5)) {
            return theme.good.fadeBg;
        }
        if (rate == 0 && !hoverRating) {
            return theme.base.boxBg;
        }
        if (rate >= 4 && !hoverRating) {
            return theme.good.fadeBg
        }
        if (rate == 3 && !hoverRating) {
            return theme.normal.fadeBg;
        }
        if (rate <= 2 && !hoverRating) {
            return theme.bad.fadeBg;
        }
        return theme.base.boxBg;
    }

};