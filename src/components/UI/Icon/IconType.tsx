import React from 'react';
import { newId } from '../../../utils/generateId';
import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Vk } from '../assets/icons/vk.svg';
import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as ArrowUp } from '../assets/icons/arrowUp.svg';
import { ReactComponent as Plus } from '../assets/icons/plusIcon.svg';
import { ReactComponent as DarkTheme } from '../assets/icons/darkThemeIcon.svg';
import { ReactComponent as LightTheme } from '../assets/icons/lightThemeIcon.svg';
import { ReactComponent as DeleteIcon } from '../assets/icons/deleteTrashIcon.svg';
import { ReactComponent as LongArrLeft } from '../assets/icons/longArrowLeft.svg';
import { ReactComponent as AccordionDown } from '../assets/icons/accordionDown.svg';

export type IconType =
  | 'facebook'
  | 'instagram'
  | 'vk'
  | 'mainLogo'
  | 'arrowUp'
  | 'plus'
  | 'themeToggleLight'
  | 'themeToggleDark'
  | 'trashCan'
  | 'longArrLeft'
  | 'accordionDown';

export const iconTypes = new Map([
  ['facebook', <Facebook key={newId()} />],
  ['instagram', <Instagram key={newId()} />],
  ['vk', <Vk key={newId()} />],
  ['mainLogo', <Logo key={newId()} />],
  ['arrowUp', <ArrowUp key={newId()} />],
  ['plus', <Plus key={newId()} />],
  ['themeToggleLight', <LightTheme key={newId()} />],
  ['themeToggleDark', <DarkTheme key={newId()} />],
  ['trashCan', <DeleteIcon key={newId()} />],
  ['longArrLeft', <LongArrLeft key={newId()} />],
  ['accordionDown', <AccordionDown key={newId()} />],
]);
