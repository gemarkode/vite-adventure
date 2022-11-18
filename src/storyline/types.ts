export interface Choice {
  text: string;
  target: string;
}

export interface Story {
  id: string;
  title?: string;
  description?: string;
  choices?: Choice[];
  imageQuery: string;
  ending?: boolean;
}
