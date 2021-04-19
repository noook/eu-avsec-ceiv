import fr from './fr';
import en from './en';

export type LocaleKeys = {
  [Key in keyof typeof fr]: string;
} & {
  [Key in keyof typeof en]: string;
}

export {
  fr,
  en,
};
