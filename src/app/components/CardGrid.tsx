import React from 'react';
import Card from './Card';

const CardGrid = () => {
    return (
        <div className="grid grid-cols-2 card-grid mb-0">
            <Card count="500+" title="Holiday Package" />
            <Card count="100" title="Luxury Hotel" />
            <Card count="7" title="Premium Airlines" />
            <Card count="2k+" title="Happy Customer" />
        </div>
    );
};

export default CardGrid;
