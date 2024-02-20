import { Button } from "../ui/Button/button";
import { Input } from "../ui/Inputs/input";
import { Payment,columns } from "../ui/Table/columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    // ...
  ]
}


export default async function Stock(){
  const data = await getData()

  return(
    <section className="flex flex-col  mt-1 justify-start items-center bg-primary-foreground  w-full h-svh gap-8 rounded-md shadow-lg">
      <h1 className="text-3xl mt-14 ">Control de Stock</h1>

      <div className="relative flex justify-center items-center bg-background gap-2 bg- h-24 w-11/12 rounded-md shadow-md">
        <Input type="search" placeholder="Buscar producto" className="border-stone-950 dark:border-white w-full max-w-xs"></Input>
        <Button variant={"default"} >Buscar</Button>
        <Button className="absolute right-8 ">Agregar Producto</Button>
      </div>

      <div className="bg-background max-h-72 min-h-72 w-11/12 rounded-md shadow-md">
        <DataTable columns={columns} data={data} ></DataTable>
      </div>
    </section>
  )
}