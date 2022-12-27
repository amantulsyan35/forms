import { atom } from 'jotai';

export enum Page {
  youtubeLink,
  generateContext,
}

export const pageAtom = atom<Page>(Page.youtubeLink);
