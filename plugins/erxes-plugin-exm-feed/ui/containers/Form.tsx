import React from 'react';
import gql from 'graphql-tag';
import { mutations, queries } from '../graphql';
import Form from '../components/Form';
import BravoForm from '../components/BravoForm';
import { IButtonMutateProps } from 'erxes-ui/lib/types';
import { ButtonMutate } from 'erxes-ui';
import EventForm from '../components/EventForm';

type Props = {
  contentType?: string;
  item?: any;
  closeModal?: () => void;
};

export default function FormContainer(props: Props) {
  const { item } = props;

  const renderButton = ({
    values,
    isSubmitted,
    callback
  }: IButtonMutateProps) => {
    const callBackResponse = () => {
      if (callback) {
        callback();
      }
    };

    const variables = {
      ...values
    };

    if (item) {
      variables._id = item._id;
    }

    return (
      <ButtonMutate
        mutation={variables._id ? mutations.editFeed : mutations.addFeed}
        variables={variables}
        callback={callBackResponse}
        refetchQueries={[{ query: gql(queries.feed) }]}
        isSubmitted={isSubmitted}
        successMessage={`You successfully ${
          variables._id ? 'edited' : 'added'
        }`}
        type='submit'
        icon='check-circle'
      />
    );
  };

  if (props.contentType === 'post') {
    return <Form {...props} renderButton={renderButton} />;
  }

  if (props.contentType === 'event') {
    return <EventForm {...props} renderButton={renderButton} />;
  }

  return <BravoForm {...props} renderButton={renderButton} />;
}
