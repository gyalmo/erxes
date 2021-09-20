import React from 'react';

import Box from 'modules/common/components/Box';
import { SidebarList } from 'modules/layout/styles';
import Icon from 'modules/common/components/Icon';
import Collapse from 'react-bootstrap/Collapse';
import { __ } from 'modules/common/utils';
import ModalTrigger from 'modules/common/components/ModalTrigger';
import Form from '../../containers/department/Form';

type Props = {
  listQuery: any;
};

export default function List({ listQuery }: Props) {
  const renderForm = ({ closeModal }) => {
    return <Form closeModal={closeModal} />;
  };

  const trigger = (
    <a href="#settings" tabIndex={0}>
      <Icon icon="plus" size={10} />
    </a>
  );

  const extraButtons = (
    <ModalTrigger
      content={renderForm}
      title="Add a department"
      trigger={trigger}
    />
  );

  return (
    <Box title={__('Departments')} name="showTags" extraButtons={extraButtons}>
      <Collapse>
        <SidebarList className="no-link">
          {(listQuery.data.departments || []).map(item => (
            <li key={item._id}>{item.title}</li>
          ))}
        </SidebarList>
      </Collapse>
    </Box>
  );
}