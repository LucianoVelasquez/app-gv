import ModeToggle from "../ThemeController/themecontroller";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar/avatar";
import { Button } from "../ui/Button/button";

export default function Menu() {
  return (
    <section className="flex flex-col bg-primary-foreground h-svh m-1 rounded-md shadow-lg w-1/5">

      <div className="flex justify-center items-center gap-4 mt-8 rounded-sm m-1">
        <Avatar>
          <AvatarImage src="https://www.svgrepo.com/show/530443/interface-control.svg"></AvatarImage>
          <AvatarFallback>Algo</AvatarFallback>
        </Avatar>
        <p className="text-xl">Gestor de ventas</p>
      </div>

      <div className="mt-20">
        <ul className="flex flex-col gap-5 items-center">
          <li><Button className="text-lg" variant={"link"}>Ventas</Button></li>
          <li><Button className="text-lg" variant={"link"}>Registro de ventas</Button></li>
        </ul>
       
      </div>
    </section>
  );
}