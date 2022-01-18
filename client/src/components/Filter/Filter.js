import React from 'react'
import '../../css/Filter/Filter.css'

function Filter(props) {
    return (
        
            <div className="filterEl">
                <h2 className='filter-title'>Filter</h2>
                <div className='num-of-products'>Number of products 4</div>
                <div className='filter-by-size'>
                    <span>Filter</span>
                    <select className='filter-select'>
                        <option value='ALL'>ALL</option>
                        <option value='XS'>XS</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='S'>S</option>
                        
                    </select>
                </div>
                <div className='filter-by-size'>
                    <span>Order</span>
                    <select className='filter-select'>
                        <option value='latest'>latest</option>
                        <option value='lower'>Lower</option>
                        <option value='highest'>Highest</option>
                        
                        
                    </select>
                </div>
            
            
            </div>

    
    )
}

export default Filter
