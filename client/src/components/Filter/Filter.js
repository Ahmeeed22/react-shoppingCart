import React from 'react'
import '../../css/Filter/Filter.css'

function Filter(props) {

    return (
        
            <div className="filterEl">
                <h2 className='filter-title'>Filter</h2>
                <div className='num-of-products'>Number of products {props.productsNo}</div>
                <div className='filter-by-size'>
                    <span>Filter</span>
                    <select value={props.size} className='filter-select' onChange={props.handleFilterBySize}>
                        <option value='ALL'>ALL</option>
                        <option value='XS'>XS</option>
                        <option value='L'>L</option>
                        <option value='XL'>XL</option>
                        <option value='S'>S</option>
                        
                    </select>
                </div>
                <div className='filter-by-order'>
                    <span>Order</span>
                    <select value={props.sort} className='filter-select' onChange={props.handelFilterByOrder}>
                        <option value='latest'>latest</option>
                        <option value='lowest'>Lower</option>
                        <option value='highest'>Highest</option>
                        
                        
                    </select>
                </div>
            
            
            </div>

    
    )
}

export default Filter
