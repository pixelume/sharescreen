import { useState } from 'react';

const useSearchPresenter = (arrayToFilter) => {
  const [searchString, setSearchString] = useState('');
  const filteredArray = arrayToFilter.filter(
    (presenter) => {
      const searchFullName = presenter.fullName? presenter.fullName.toLowerCase().includes(searchString.toLowerCase().trim()): false;
      const searchInstitution = presenter.institution? presenter.institution.toLowerCase().includes(searchString.toLowerCase().trim()): false;
      const searchSubjectMatter = presenter.subjectMatter? presenter.subjectMatter.join(',').toLowerCase().includes(searchString.toLowerCase().trim()): false;
      return (searchFullName || searchInstitution || searchSubjectMatter)
    }
  );
  return [searchString, setSearchString, filteredArray];
};

export default useSearchPresenter;
