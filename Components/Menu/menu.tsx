'use client'
import { useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar/avatar";
import { Button } from "../ui/Button/button";
import { useDispatch } from "react-redux";
import { addAllProducts, productoI } from '@/redux/features/productosSlice'

export default function Menu() {
  const dispatch = useDispatch();
  const data : productoI[] = [
    {
      id: "728eadsf",
      amount: 100,
      status: "pending",
      descripcion: "m@mariano.com",
    },
    {
      id: "72dfgd52f",
      amount: 10525045,
      status: "pending",
      descripcion: "m@Joselo.com",
    },
    {
      id: "h2f",
      amount: 101,
      status: "pending",
      descripcion: "m@example.com",
    },
    {
      id: "728ew2f",
      amount: 150,
      status: "pending",
      descripcion: "m@example.com",
    },
    {
      id: "72trf",
      amount: 70,
      status: "pending",
      descripcion: "agenda",
    },
    {
      id: "72gff",
      amount: 860,
      status: "pending",
      descripcion: "m@example.com",
    },
    {
      id: "4sd42",
      amount: 125,
      status: "processing",
      descripcion: "example@gmail.com",
    },
    {
      id: "4a9e1d42",
      amount: 14,
      status: "processing",
      descripcion: "example@gmail.com",
    },
    {
      id: "489e53",
      amount: 12,
      status: "processing",
      descripcion: "Agenda",
    },
    {
      id: "41231d42",
      amount: 133,
      status: "processing",
      descripcion: "Musculosa",
    },
    {
      id: "48965d42",
      amount: 44,
      status: "processing",
      descripcion: "arrandeo",
    },
    {
      id: "44g9e",
      amount: 112,
      status: "processing",
      descripcion: "Agenda",
    },
    // ...
  ]

  useEffect(()=>{
    
    loadingProducts();

  },[])

  const loadingProducts = () =>{
    dispatch(addAllProducts(data))
  }

  return (
    <section className="flex flex-col bg-primary-foreground m-1 rounded-md shadow-lg w-1/5 min-h-min">

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