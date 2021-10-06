import * as React from 'react';
import { Floor } from '../components';
import { AppConsumer } from './AppContext';
import { graphql, compose, ChildProps } from 'react-apollo';
import gql from 'graphql-tag';
import { productCategory } from '../graphql';
import { IProductCategory } from '../types';

type Props = {
  floorId?: string;
};

type QueryResponse = {
  widgetsProductCategory: IProductCategory;
};

function FloorContainer(props: ChildProps<Props, QueryResponse>) {
  const { data } = props;

  if (!data || data.loading) {
    return null;
  }

  const extendedProps = {
    ...props,
    floor: data.widgetsProductCategory
  };

  return <Floor {...extendedProps} />;
}

const WithData = compose(
  graphql<Props, QueryResponse>(gql(productCategory), {
    options: ({ floorId }) => ({
      variables: {
        _id: floorId
      }
    })
  })
)(FloorContainer);

const WithContext = () => (
  <AppConsumer>
    {({ activeFloor }) => <WithData floorId={activeFloor} />}
  </AppConsumer>
);

export default WithContext;