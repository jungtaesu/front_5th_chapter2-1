import React from 'react';

const StockStatus = ({ stock }: any) => {
    return (
        <div id="stock-status" className="text-sm text-gray-500 mt-2">
            {stock > 0 ? `In Stock: ${stock}` : 'Out of Stock'}
        </div>
    );
};

export default StockStatus;