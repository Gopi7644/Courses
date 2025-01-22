import React from 'react'

const Fillter = (props) => {
    let filterData = props.filterData;
    let category = props.category
    let setCategory = props.setCategory

    function filterHandler(title) {
        setCategory(title);
    }
    return (
        <div className='text-center'>
            {
                filterData.map((Data) => (
                    <button className={`text-lg bg-slate-700 my-2 mx-2 py-2 px-5 border-2 border-black  text-white rounded-full  transition-all duration-300
                    ${category === Data.title ?
                         "bg-opacity-90 border-white" :
                         "bg-opacity-50 border-transparent"}    
                    `} 
                    key={Data.id}
                    onClick={()=>filterHandler(Data.title)}>
                        
                    {Data.title}</button>
                ))
            }
        </div>
    )
}

export default Fillter
