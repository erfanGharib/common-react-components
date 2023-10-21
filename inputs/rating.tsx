import { Dispatch, SetStateAction, useState } from "react";

interface T_Props {
    rating: number;
    setRating?: Dispatch<SetStateAction<number>>, 
    readOnly?: boolean, 
    className?: string
}

const Rating = ({ 
    rating, 
    readOnly = false,
    className = '',
    setRating = (number) => {}, 
}: T_Props) => {
    const maxRating = 5;
    const [hoveredRating, setHoveredRating] = useState(null);

    const handleRatingClick = (newRating: number) => {
        if(readOnly) return;
        setRating(newRating);
    }
    const handleRatingHover = (newRating: number) => {
        if(readOnly) return;
        setHoveredRating(newRating);
    }

    return (
        <div className="flex text-current">
            {Array.from({ length: maxRating }, (_, index) => (
                <button
                    type="button"
                    key={index}
                    onClick={() => handleRatingClick(index + 1)}
                    onMouseEnter={() => handleRatingHover(index + 1)}
                    onMouseLeave={() => handleRatingHover(null)}
                    className={[
                        `${className} ${readOnly && '!cursor-default'} text-xl focus:outline-none text-gray-300 dark:text-opacity-50`,
                        `${((index < rating && !hoveredRating) || (index < hoveredRating)) && 'text-yellow-400 dark:!text-opacity-100'}`,
                    ].join(' ')}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

export default Rating;