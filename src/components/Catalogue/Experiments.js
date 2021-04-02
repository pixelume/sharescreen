import React, {useEffect} from 'react'
import { useQuery, gql } from '@apollo/client';
// import Cards from '../Cards/Cards';
import Notification from '../../styles/Notification';
import LoadAnimation from '../../styles/LoadAnimation';

const EXPERIMENT_DATA = gql`
  query GetExperimentData {
  presentations {
    Name
    id
    presenter{
      fullName
    }
  }
}
`;

const Experiments = () => {
  const { loading, error, data } = useQuery(EXPERIMENT_DATA);

  useEffect(() => {
    console.log('data', data)
    console.log('error', error)
    console.log('loading', loading)
  }, [data, error, loading])

  return (
    <>
      {/* <div>Check log</div> */}
      {data && data.presentations.map((presentation) => (
        <React.Fragment key={presentation.id}>
        <h2>{presentation.Name}</h2>
        <p>by&nbsp;{presentation.presenter.fullName}</p>
        </React.Fragment>
      ))}
      {error && <Notification color="red">{error}</Notification>}
      {loading && <LoadAnimation />}
    </>
  )
}
export default Experiments