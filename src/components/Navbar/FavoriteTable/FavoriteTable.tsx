import { Person } from "@/models";
import { AppStore } from "@/redux/store";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { removeFavorite } from "@/redux";

function FavoriteTable() {
  const pageSize = 5;
  const dispatch = useDispatch();
  const favoriteStore = useSelector((state: AppStore) => state.favorite);

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person));
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false, //para que no filtre de arriba-abajo
      headerName: "Select",
      minWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton
              color="secondary"
              aria-label="favorites"
              component="label"
              onClick={() => handleClick(params.row)}
            >
              <Delete />
            </IconButton>
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "ESTABLECIMIENTO",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "SEDE",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "PROVINCIA",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "DISTRITO",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];
  return (
    <div style={{ width: "765px" }}>
      <DataGrid
        rows={favoriteStore}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        getRowId={(row: any) => row.id}
      />
    </div>
  );
}
export default FavoriteTable;
