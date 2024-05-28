import React from 'react';
import './Square.css';

interface SquareProps extends React.PropsWithChildren {
    hasItem: boolean;
    clicked: boolean;
    onOpenClick: React.MouseEventHandler<HTMLDivElement>;
}
const Square: React.FC<SquareProps> = ({
    hasItem,
    clicked,
    onOpenClick
}) => {
    const classNames = ['square'];
    if (clicked) {
        classNames.push('square-clicked');
        if (hasItem) {
            classNames.push('square-hasItem');
        }
    }

    return (
        <div className={classNames.join(' ')} onClick={onOpenClick}>
            {clicked && hasItem && <span>O</span>}
        </div>
    );
};

export default Square;
