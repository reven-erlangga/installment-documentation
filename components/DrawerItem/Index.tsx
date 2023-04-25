import Link from "next/link";
import { useRouter } from "next/router";
import { Item } from "./Types/Item.type";

const DrawerItem = ({ text, href, active, ...props }: Item) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`flex items-center py-3 text-white rounded-lg ${
        router.pathname == href ? `bg-primary` : `hover:bg-gray-700`
      }`}
    >
      <span className="flex-1 ml-3 whitespace-nowrap">{text}</span>
    </Link>
  );
};

export default DrawerItem;
