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
import { ReactComponent as Error } from '../assets/icons/error.svg';
import { ReactComponent as Close } from '../assets/icons/closeIcon.svg';
import { ReactComponent as SliderArrow } from '../assets/icons/SliderArrow.svg';
import { ReactComponent as CorrectIcon } from '../assets/icons/correct.svg';
import { ReactComponent as ImageIcon } from '../assets/icons/imageIcon.svg';
import { ReactComponent as BigDeleteIcon } from '../assets/icons/bigTrashcan.svg';
import { ReactComponent as PhotoPlug } from '../assets/icons/NoImageSvg.svg';
import { ReactComponent as CloseResize } from '../assets/icons/closeResize.svg';

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
  | 'accordionDown'
  | 'error'
  | 'close'
  | 'sliderArrow'
  | 'correct'
  | 'imgIcon'
  | 'bigTrashCan'
  | 'PhotoPlug'
  | 'CloseResize';

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
  ['error', <Error key={newId()} />],
  ['close', <Close key={newId()} />],
  ['sliderArrow', <SliderArrow key={newId()} />],
  ['correct', <CorrectIcon key={newId()} />],
  ['imgIcon', <ImageIcon key={newId()} />],
  ['bigTrashCan', <BigDeleteIcon key={newId()} />],
  ['PhotoPlug', <PhotoPlug key={newId()} />],
  ['CloseResize', <CloseResize key={newId()} />],
]);
