import React from 'react';
import Square from '../Square/Square';
import './Field.css';

interface Item {
    hasItem: boolean;
    clicked: boolean;
}

interface FieldProps {
    items: Item[];
    onItemClick: (index: number) => void;
}

const Field: React.FC<FieldProps> = ({ items, onItemClick }) => {
    return (
        <div className="Field">
            {items.map((item, index) => (
                <Square
                    key={index}
                    hasItem={item.hasItem}
                    clicked={item.clicked}
                    onOpenClick={() => onItemClick(index)}
                />
            ))}
        </div>
    );
};

export default Field;
