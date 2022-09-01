import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({
    filter,
    setFilter,
}: {
    filter: string;
    setFilter: (value: string) => void;
}) => {
    const [value, setValue] = useState(filter);

    // le hook useAsyncDeboucer permet de contrer les effets de rendu trop rapide
    const handleChange = useAsyncDebounce((value) => {
        setFilter(value || undefined);
    }, 1000);

    return (
        <div>
            <label htmlFor="filter">Search :</label>
            <input
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    handleChange(e.target.value);
                }}
            />
        </div>
    );
};

export default GlobalFilter;
