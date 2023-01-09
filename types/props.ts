export type Link = {
  link: string;
  href: string;
};

export type LinksProps = {
  links: Link[];
  classList?: string;
  classItem?: string;
  onClick?: () => void;
};

export type MenuProps = {
  links: Link[];
};

export type ChildrenProps = {
  children: JSX.Element;
};

export type LinksFooter = {
  nameAccordion: string;
  links: Link[];
};

export type AccordionsProps = {
  linksFooter: LinksFooter[];
}