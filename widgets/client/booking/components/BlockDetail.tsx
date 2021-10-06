import * as React from 'react';
import { IProductCategory } from '../types';
import { readFile } from '../../utils';
import { BackButton } from './common';

type Props = {
  goToBookings?: () => void;
  block?: IProductCategory;
};

function BlockDetail({ goToBookings, block }: Props) {
  if (!block) {
    return null;
  }
  return (
      <div className="main-container">
        <div className="main-header">
          <div className="flex-center b mb-10">{block.name}</div>
          <div className="flex-center mb-10">{block.description}</div>
          <div className="main-body">
            <img src={readFile(block.attachment.url)} alt="hello" />
          </div>
      </div>
    </div>
  );
}

export default BlockDetail;