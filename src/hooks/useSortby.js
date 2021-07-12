import { useState } from 'react';

const useSortBy = (arrayToSort, headings) => {
  const [sortBy, setSortBy] = useState(false)
  
  const sortedArray = () => {
    switch (sortBy.heading) {
      case headings[0]: // by Presenter
        const arr0 = arrayToSort.sort((a, b) => `${a.surname}${a.name}`.localeCompare(`${b.surname}${b.name}`))
        return sortBy.ascending? arr0: arr0.reverse()
      case headings[2]: // by Current Institution
        const arr1 = arrayToSort.sort((a, b) => a.institution.localeCompare(b.institution))
        return sortBy.ascending? arr1: arr1.reverse()
      default:
        return arrayToSort;
    }
  }
    return [sortBy, setSortBy, sortedArray(sortBy)];
}

export default useSortBy