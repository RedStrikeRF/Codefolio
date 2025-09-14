import React from 'react';
import { ActionRestrictorProps } from './ActionRestrictor.types';

export const ActionRestrictor: React.FC<ActionRestrictorProps> = ({ action, children }) => (
  <>
    {action && children}
  </>
);

// TODO Сделать storybook для ActionRestriction