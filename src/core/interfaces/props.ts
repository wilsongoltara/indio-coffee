export interface Link {
  link: string;
  href: string;
}

export interface LinksProps {
  links: Link[];
  classList?: string;
  classItem?: string;
  onClick?: () => void;
}

export interface MenuProps {
  links: Link[];
}

export interface ChildrenProps {
  children: JSX.Element;
}

export interface LinksFooter {
  nameAccordion: string;
  links: Link[];
}

export interface LinksFooterProps {
  linksFooter: LinksFooter[];
}

export interface FooterProps {
  linksFooter: LinksFooter[];
  linksExtras: Link[]
}

export interface HeroProps {
  bgHero: string;
  hrefImage: string;
  titleHero: string;
  descriptionHero: string; 
  buttonHero: string;
  order?: boolean;
}
