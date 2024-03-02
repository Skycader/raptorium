export interface CardConfigInterface {
  title: string;
  subheader: string;
  avatarSrc: string;
  backgroundSrc: string;
  description: string;
  solution: string;
}

export interface CardButtonInterface {
  icon: string;
  text: string;
  destination?: string[];
}
