import { useState } from 'react';

const useSortByPresentation = (arrayToSort, headings) => {
  const [sortBy, setSortBy] = useState(false)
  
  const sortedArray = () => {
    switch (sortBy.heading) {
      case headings[0]: // by Name
        const arr0 = arrayToSort.sort((a, b) => a.name.localeCompare(b.name))
        return sortBy.ascending? arr0: arr0.reverse()
      case headings[4]: // by Presenter
        const arr1 = arrayToSort.sort((a, b) => a.institution.localeCompare(b.institution))
        return sortBy.ascending? arr1: arr1.reverse()
      default:
        return arrayToSort;
    }
  }
    return [sortBy, setSortBy, sortedArray(sortBy)];
}

export default useSortByPresentation

// 'Presentation', // Image, Name & Duration
//   'Description',
//   'Main Topic',
//   'Tags',
//   'Presenter'