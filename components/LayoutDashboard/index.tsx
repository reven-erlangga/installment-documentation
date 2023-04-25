import { Inter } from "next/font/google";
import { ReactNode } from "react";
import DrawerSales from "../Drawer/DrawerSales/Index";

interface Props {
  children?: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const LayoutDashboard = ({ children, ...props }: Props) => {
  return (
    <div>
      <DrawerSales />
      <div className={`p-12 sm:ml-64 ${inter.className}`}>{children}</div>
    </div>
  );
};

export default LayoutDashboard;
