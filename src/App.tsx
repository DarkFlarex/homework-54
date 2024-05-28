import React, { useState } from 'react';
import './App.css';
import Field from './components/Field/Field';
import Tries from "./components/Tries/Tries";

const App: React.FC = () => {
    const createItems = () => {
        const items = [];
        for (let i = 0; i < 36; i++) {
            items.push({ hasItem: false, clicked: false });
        }
        const itemIndex = Math.floor(Math.random() * items.length);
        items[itemIndex].hasItem = true;
        return items;
    };

    const [items, setItems] = useState(createItems());
    const [clicks, setClicks] = useState(0);
    const [foundItem, setFoundItem] = useState(false);

    const onItemClick = (index: number) => {
        setItems((prevItems) => {
            const itemsCopy = [...prevItems];
            const itemCopy = itemsCopy[index];
            if (!itemCopy.clicked && !foundItem) {
                itemCopy.clicked = true;
                setClicks((prevClicks) => prevClicks + 1);
                if (itemCopy.hasItem) {
                    setFoundItem(true);
                }
            }
            itemsCopy[index] = itemCopy;
            return itemsCopy;
        });
    };

    const resetField = () => {
        setItems(createItems());
        setClicks(0);
        setFoundItem(false);
    };

    return (
        <div className="App">
            <Field items={items} onItemClick={onItemClick} />
            <div className="Field-down">
                <Tries  clicks={clicks} />
                <button className="reset-button" onClick={resetField}>Reset</button>
                <span>{foundItem && `Вы нашли символ`}</span>
            </div>
        </div>
    );
};

export default App;
