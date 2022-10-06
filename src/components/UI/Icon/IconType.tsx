import React from 'react';
import { newId } from '../../../utils/generateId';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Vk } from '../assets/icons/vk.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';

export type IconType = 'facebook' | 'instagram' | 'vk' | 'mainLogo';

export const iconTypes = new Map([
  ['facebook', <Facebook key={newId()} />],
  ['instagram', <Instagram key={newId()} />],
  ['vk', <Vk key={newId()} />],
  ['mainLogo', <Logo key={newId()} />],
]);
