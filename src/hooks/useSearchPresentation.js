import { useState } from 'react';

const useSearchPresentation = (arrayToFilter) => {
  const [searchString, setSearchString] = useState('');
  const filteredArray = arrayToFilter.filter((presentation) =>{
    const searchInName = presentation.name?presentation.name.toLowerCase().includes(searchString.toLowerCase().trim()):false;
    const searchInDescription = presentation.description? presentation.description.toLowerCase().includes(searchString.toLowerCase().trim()):false;
    const searchInTags = presentation.tags? presentation.tags.join(',').toLowerCase().includes(searchString.toLowerCase().trim()): false
    return (searchInName || searchInDescription || searchInTags)
  });
  return [searchString, setSearchString, filteredArray];
};

export default useSearchPresentation;

// 'Presentation', // Image, Name & Duration
//   'Description',
//   'Main Topic',
//   'Tags',
//   'Presenter'
