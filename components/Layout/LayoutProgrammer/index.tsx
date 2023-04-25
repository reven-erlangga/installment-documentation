import DrawerProgrammer from "@/components/Drawer/DrawerProgrammer";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const LayoutProgrammer = ({ children, ...props }: Props) => {
  return (
    <div>
      <DrawerProgrammer />
      <div className={`p-12 sm:ml-64 ${inter.className}`}>{children}</div>
    </div>
  );
};

export default LayoutProgrammer;
