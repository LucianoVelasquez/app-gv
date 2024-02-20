import { useState } from "react";
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
      descripcion: "m@mariano.com",
    },
    {
      id: "728ed52f",
      amount: 10525045,
      status: "pending",
      descripcion: "m@Joselo.com",
    },
    {
      id: "728ed52f",
      amount: 101,
      status: "pending",
      descripcion: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 150,
      status: "pending",
      descripcion: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 70,
      status: "pending",
      descripcion: "agenda",
    },
    {
      id: "728ed52f",
      amount: 860,
      status: "pending",
      descripcion: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      descripcion: "example@gmail.com",
    },
    {
      id: "489e1d42",
      amount: 14,
      status: "processing",
      descripcion: "example@gmail.com",
    },
    {
      id: "489e1d42",
      amount: 12,
      status: "processing",
      descripcion: "Agenda",
    },
    {
      id: "489e1d42",
      amount: 133,
      status: "processing",
      descripcion: "Musculosa",
    },
    {
      id: "489e1d42",
      amount: 44,
      status: "processing",
      descripcion: "arrandeo",
    },
    {
      id: "489e1d42",
      amount: 112,
      status: "processing",
      descripcion: "Agenda",
    },
    // ...
  ]
}


export default async function Stock(){
  const data = await getData()

  return(
    <section className="flex flex-col mt-1 mb-1 mr-1 justify-start items-center bg-primary-foreground  w-full min-h-svh gap-8 rounded-md shadow-lg">

      <h1 className="text-3xl mt-14 ">Control de Stock</h1>

      <div className="bg-background min-h-96 w-11/12 rounded-md shadow-md mb-6">
        <DataTable columns={columns} data={data} ></DataTable>
      </div>

    </section>
  )
}