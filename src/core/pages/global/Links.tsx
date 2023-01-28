import NextLink from 'next/link';
import { LinksProps } from '~/core/interfaces/props';

export default function Links({
  links,
  classList,
  classItem,
  onClick,
}: LinksProps) {
  return (
    <ul className={classList}>
      {links.map(({ link, href }) => (
        <li key={link} className={classItem} onClick={onClick}>
          <NextLink href={href}>{link}</NextLink>
        </li>
      ))}
    </ul>
  );
}
