import { FC } from 'react';

export interface NavItem {
  label: string;
  id: string;
}

interface NavLinkProps {
  item: NavItem;
  onClick: (id: string) => void;
}

const NavLink: FC<NavLinkProps> = ({ item, onClick }) => (
  <button
    onClick={() => onClick(item.id)}
    className="px-4 py-2 rounded-lg text-red-300  focus:outline-none transition-all duration-200"
  >
    {item.label}
  </button>
);

export default NavLink;