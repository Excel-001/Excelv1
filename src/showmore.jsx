import React, { useState, useEffect } from 'react';

function ShowMoreContainer({ children }) {
  const [showAll, setShowAll] = useState(false);
  const [maxVisibleItems, setMaxVisibleItems] = useState(6);

  useEffect(() => {
    const updateMaxVisibleItems = () => {
      const isMobile = window.innerWidth <= 1199;
      setMaxVisibleItems(isMobile ? 4 : 6);
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
       <div className=" gap-10 w-11/12 flex flex-wrap justify-between relative ">
      {React.Children.toArray(children).slice(0, visibleItemsCount)}
      {children.length > 6 && (
        <div className=' w-[100%] flex justify-center'>
          <button className='   opacity-50 hover:opacity-100 hover:ease-in focus:bg-opacity-100 font-bold not-italic font-[inter] lg:w-[12.4rem] rounded-[3.125rem] bg-[#EB03FF] w-[13rem] text-center p-3' onClick={toggleShowMore}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>    
        </div>
      
      )}
    </div>
  );
}

export default ShowMoreContainer;

