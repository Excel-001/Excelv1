import React, { useState, useEffect } from 'react';

function ShowMoreContainer({ children }) {
  const [showAll, setShowAll] = useState(false);
  const [maxVisibleItems, setMaxVisibleItems] = useState(6);

  useEffect(() => {
    const updateMaxVisibleItems = () => {
      const isMobile = window.innerWidth <= 1199;
      setMaxVisibleItems(isMobile ? 4 : 8);
    };

    updateMaxVisibleItems();

    window.addEventListener('resize', updateMaxVisibleItems);
    return () => window.removeEventListener('resize', updateMaxVisibleItems);
  }, []);

  const visibleItemsCount = showAll ? children.length : maxVisibleItems;

  const toggleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <><div className="    flex-wrap justify-between h-fit relative grid grid-cols-4  w-11/12 lg:p-16 p-9  m-auto overflow-hidden lg:gap-10 gap-5  ">
      {React.Children.toArray(children).slice(0, visibleItemsCount)}
   
        
    </div>
     {children.length > 8 && (
        <div className=' w-[100%] flex justify-center'>
          <button 
         className={`opacity-50 hover:opacity-100 text-center p-3 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[10.4rem]  w-[10rem] rounded-[3.125rem] ${ darkMode ? " bg-[#120720] text-[#cdc9c3]" : "bg-[#EB03FF]"}`}
          onClick={toggleShowMore}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>    
        </div>
      
      )}
    </>
       
  );
}

export default ShowMoreContainer;

