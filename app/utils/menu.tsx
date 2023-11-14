import { Home2, MenuBoard, ClipboardTick, Layer } from "iconsax-react";

interface MenuItem {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}

const menu: MenuItem[] = [
  {
    id: 1,
    title: "All Tasks",
    icon: <Home2 size="20" color="#0096ff" />,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: <MenuBoard size="20" color="#0096ff" />,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed!",
    icon: <ClipboardTick size="20" color="#0096ff" />,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: <Layer size="20" color="#0096ff" />,
    link: "/incomplete",
  },
];

export default menu;
