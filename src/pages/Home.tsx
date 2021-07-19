import { selectTotalCount } from '../redux/reducers/totalCountSlice';
import { setTotalCount } from '../redux/reducers/totalCountSlice';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { selectPeople } from '../redux/reducers/peopleSlice';
import { setPeople } from '../redux/reducers/peopleSlice'; 
import { selectPage } from '../redux/reducers/pageSlice';
import { GET_ALL_PEOPLE } from '../graphqlq/queries';
import Pagination from '../components/Pagination';
import People from '../components/People';
import Loader from '../components/Loader';
import { useQuery } from '@apollo/client';
import React from 'react';

const Home: React.FC<{}> = () => {
  const totalCount = useAppSelector(selectTotalCount);
  const currentPage = useAppSelector(selectPage);
  const people = useAppSelector(selectPeople);
  const dispatch = useAppDispatch();

  const pagination = <Pagination totalCount={ totalCount } currentPage={ currentPage } />;

  const { loading, error, data } = useQuery(GET_ALL_PEOPLE, { variables: { page: currentPage }});
 
  if (loading) return <><Loader />{ pagination }</>;
  if (error) return <>Error! {error.message}</>;

  const { count, results } = data.getPeople;
  dispatch(setTotalCount(count));
  dispatch(setPeople(results));

  return <><People people={people} />{ pagination }</>;
}

export default Home;
