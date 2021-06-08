import Button from 'modules/common/components/Button';
import FormControl from 'modules/common/components/form/Control';
import { IStage } from 'modules/boards/types';
import Icon from 'modules/common/components/Icon';
import React from 'react';
import { StageItemContainer } from 'modules/settings/boards/styles';
import Tip from 'modules/common/components/Tip';
import { __ } from 'modules/common/utils';
import { colors } from 'modules/common/styles';

type Props = {
  stage: IStage;
  remove: (stageId: string) => void;
  onChange: (stageId: string, name: string, value: string) => void;
  onClick: (stage: IStage) => void;
  onKeyPress: (e: any) => void;
};

class StageItem extends React.Component<Props, {}> {
  render() {
    const { stage, onChange, onKeyPress, remove, onClick } = this.props;

    const onChangeName = (stageId, e) =>
      onChange(stageId, e.target.name, e.target.value);

    const onBuildClick = e => {
      onClick(stage);
    };

    return (
      <StageItemContainer key={stage._id}>
        <FormControl
          defaultValue={stage.name}
          type="text"
          placeholder={__('Stage name')}
          onKeyPress={onKeyPress}
          autoFocus={true}
          name="name"
          onChange={onChangeName.bind(this, stage._id)}
        />

        <Button btnStyle="link" onClick={onBuildClick}>
          <Tip text={__('Build a form')}>
            <Icon
              icon={stage.formId ? 'file-edit-3' : 'file-plus-alt'}
              color={
                stage.formId ? colors.colorSecondary : colors.colorCoreGreen
              }
            />
          </Tip>
        </Button>

        <Button
          btnStyle="link"
          onClick={remove.bind(this, stage._id)}
          icon="times"
        />
      </StageItemContainer>
    );
  }
}

export default StageItem;
