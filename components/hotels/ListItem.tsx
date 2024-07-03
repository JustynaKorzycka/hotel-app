import Link from "next/link";

interface IListItemProps {
  link: string;
  name: string;
}

const ListItem = ({ link, name }: IListItemProps) => {
  return (
    <li>
      <Link href={link}>{name}</Link>
    </li>
  );
};

export default ListItem;
