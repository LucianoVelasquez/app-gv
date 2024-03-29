"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Trash2 } from "lucide-react"
import { Checkbox } from "@/Components/ui/Checkbox/checkbox"

import { Button } from "@/Components/ui/Button/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/Components/ui/DropDownMenu/dropdown-menu"
import { useAppDispatch } from "@/redux/hooks"
import { removeProducById,removeSelected } from '@/redux/features/productosSlice'


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  descripcion: string
}



export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        onClick={()=> console.log(row.original.id)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id"
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "descripcion",
    header: "Descripcion"
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="text-right">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Precio Unitario
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseInt(row.getValue("amount"));
      /* const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount) */
 
      return <div className="text-right font-medium">$ {amount.toLocaleString()}</div>
    },
  },
  {
    accessorKey: "accion",
    header: ({table}) => {
      const dispatch = useAppDispatch();

      const deleteItems = () =>{
        let selected = table.getSelectedRowModel().rows.map((e)=> e.original);
        dispatch(removeSelected(selected));
        table.toggleAllPageRowsSelected(false)
        
      }
      return (table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()) ?
      <div className="flex justify-end"><Button onClick={()=> deleteItems()} size={"sm"} className="bg-destructive"><Trash2 size={20} strokeWidth={1.50} /></Button></div> : <div className="text-right">Acciones</div> 
    },
    id: "actions",
    cell: ({ row, table }) => {

      const dispatch = useAppDispatch();
      const payment = row.original

      const deleteItems = () =>{
        let selected = table.getSelectedRowModel().rows.map((e)=> e.original);
        dispatch(removeSelected(selected));
        table.toggleAllPageRowsSelected(false)
        
      }


      return (
        <div className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

              
            <DropdownMenuContent align="end">              
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              {
                (table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected())? <p className="text-sm text-center">Ninguna</p> :
                  <><DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  Copiar ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive" onClick={(e) => dispatch(removeProducById(payment.id))}>Eliminar</DropdownMenuItem>
                </>
              }
            
            </DropdownMenuContent>
          </DropdownMenu>     
        </div>
      )
    },
  },
]
