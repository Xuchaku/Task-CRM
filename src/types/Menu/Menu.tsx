type Menu = {
  id: number;
  text: string;
  component: React.FunctionComponent;
  children?: Menu[];
};
export default Menu;
