import React from 'react';
import { newId } from '../../../utils/generateId';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';

export type IconType = 'facebook' | 'instagram';

export const iconTypes = new Map([['facebook', <Facebook key={newId()} />]]);
