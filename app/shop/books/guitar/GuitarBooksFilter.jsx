"use client"


export const GuitarBooksFilter = ({filterValue, setFilterValue}) => {


    return (
        <div className="px-5 lg:px-36 xl:px-52 py-8 border-b-2 bg-gray-100 border-gray-300">
            <div className="w-full sm:w-[250px] mb-6 md:mb-0 mr-10">
                <p className="mb-1">Filter guitar books:</p>
                <select 
                    className="w-full h-8 cursor-pointer border-2 border-gray-400" 
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                >
                    <option value="guitar-all">all guitar books</option>
                    {/* <option value="piano-all">all piano books</option>
                    <option value="piano-rcm">rcm piano books</option>
                    <option value="piano-non-rcm">non-rcm piano books</option> */}
                </select>
            </div>
        </div>
    )
}