'use client'
import { useAppSelector } from "@/redux/hooks";
import { Payment,columns } from "../ui/Table/columns";
import { DataTable } from "./data-table";

export default function Stock(){

 const productos = useAppSelector((state) => state.productosReducer.productos );

  return(
    <section className="flex flex-col mt-1 mb-1 mr-1 justify-start items-center bg-primary-foreground  w-full min-h-svh gap-8 rounded-md shadow-lg">

      <h1 className="text-3xl mt-14 ">Control de Stock</h1>

      <div className="bg-background min-h-96 w-11/12 rounded-md shadow-md mb-6">
        <DataTable columns={columns} data={productos}></DataTable>
      </div>

    </section>
  )
}