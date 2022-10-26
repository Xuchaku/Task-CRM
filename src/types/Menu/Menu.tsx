type Menu = {
  id: number;
  text: string;
  component: React.FunctionComponent;
  children?: Menu[];
  to: string;
};
export default Menu;
