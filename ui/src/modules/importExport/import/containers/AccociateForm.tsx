import gql from 'graphql-tag';
import * as compose from 'lodash.flowright';
import Spinner from 'modules/common/components/Spinner';

import { withProps } from 'modules/common/utils';
import React from 'react';
import { graphql } from 'react-apollo';
import AccociateForm from '../components/AccociateForm';
import { queries } from '../graphql';

type Props = {
  attachmentNames: string[];
  contentTypes: string[];
  onChangeAssociateHeader: (value: string) => void;
  onChangeAssociateContentType: (value: string) => void;
};

type State = {};

type FinalProps = {
  importHistoryGetDuplicatedHeaders: any;
} & Props;

class AccociateFormContainer extends React.Component<FinalProps, State> {
  render() {
    const { importHistoryGetDuplicatedHeaders } = this.props;

    if (!importHistoryGetDuplicatedHeaders) {
      return <div>aaa</div>;
    }

    if (importHistoryGetDuplicatedHeaders.loading) {
      return <Spinner />;
    }

    const duplicatedHeaders =
      importHistoryGetDuplicatedHeaders.importHistoryGetDuplicatedHeaders;

    return (
      <AccociateForm {...this.props} duplicatedHeaders={duplicatedHeaders} />
    );
  }
}

export default withProps<Props>(
  compose(
    graphql<Props>(gql(queries.importHistoryGetDuplicatedHeaders), {
      name: 'importHistoryGetDuplicatedHeaders',
      skip: ({ attachmentNames }) => attachmentNames.length < 2,
      options: ({ attachmentNames }) => {
        return {
          variables: {
            attachmentNames
          }
        };
      }
    })
  )(AccociateFormContainer)
);
