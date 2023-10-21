import { useState } from "react";

interface T_Props {
    className?: string;
    initialState?: 0 | 1;
    name: string;
    id: string;
    children?: any;
    text?: string;
}

const CheckboxInput = ({ 
    className = '', 
    initialState = 0,
    name = '',
    id = '',
    children,
    text
}: T_Props) => {
    const [checked, setChecked] = useState(initialState);

    return (
        <label
            htmlFor={id}
            className="cursor-pointer f-center-start font-medium"
        >
            <input
                onChange={() => {
                    setChecked(checked === 0 ? 1 : 0);
                }}
                checked={Boolean(checked)}
                value={checked}
                name={name}
                id={id}
                type="checkbox"
                className="w-4 h-4 ml-2"
            />
            {children || text}
        </label>
    );
}

export default CheckboxInput;