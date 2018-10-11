import * as React from 'react';
import { Icon } from '@material-ui/core';
import styled from 'styled-components';
import theme from '../../../theme/theme';

const StyledIcon = styled(Icon).attrs({
  style: {
    color: theme.colors.primary,
    fontSize: '20px',
  },
})``;

interface Props {
  name: string
  className?: string
  style?: any
}

const IconComponent = ({ name, className, style }: Props) => {
  return <StyledIcon className={className}>{name}</StyledIcon>;
}


export default IconComponent;