import Stock from "@/Components/ControlStock/controlstock";
import Menu from "@/Components/Menu/menu";
import ModeToggle from "@/Components/ThemeController/themecontroller";

export default function Home() {
  return (
    
      <div data-theme="business" className="flex relative">
        <div className="absolute right-5 top-3" ><ModeToggle/></div>
        <Menu></Menu>
        <Stock></Stock>    
      </div>
  );
}
