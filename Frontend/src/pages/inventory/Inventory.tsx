import { useState } from "react"
import "./inventory.scss"
import { DataTable } from "../../components/dataTable/DataTable"
import { Add } from "../../components/add/Add"
import { GridColDef } from "@mui/x-data-grid";
import { inventory } from "../../data";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "img",
        headerName: "Image",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: "title",
        type: "string",
        headerName: "Title",
        width: 250,
    },
    {
        field: "color",
        type: "string",
        headerName: "Color",
        width: 150,
    },
    {
        field: "price",
        type: "string",
        headerName: "Price",
        width: 200,
    },
    {
        field: "producer",
        headerName: "Producer",
        type: "string",
        width: 200,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 200,
        type: "string",
    },
    {
        field: "inStock",
        headerName: "In Stock",
        width: 150,
        type: "boolean",
    },
];

const Inventory = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="inventory">
            <div className="info">
                <h1>Inventory</h1>
                <button onClick={() => setOpen(true)}>Add New Product</button>
            </div>
            <DataTable slug="inventory" columns={columns} rows={inventory} />
            {open && <Add slug="item" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Inventory;