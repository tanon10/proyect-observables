import { Person } from "@/models";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, addPeople, store } from "@/redux";
import { AppStore } from "@/redux/store";
import { useState, useEffect } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";

function PeopleTable() {
  const [selectPeople, setSelectPeople] = useState<Person[]>([]);
  const dispatch = useDispatch();
  const peopleStore = useSelector((state: AppStore) => state.people);
  const favoriteStore = useSelector((state: AppStore) => state.favorite);
  const pageSize = 5;
  const findPerson = (person: Person) =>
    !!selectPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selectPeople.filter((p) => p.id !== person.id);
  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectPeople(filteredPeople);
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
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "LevelOfHappiness",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  useEffect(() => {
    setSelectPeople(favoriteStore);
  }, [favoriteStore]);

  return (
    <div style={{ width: "765px" }}>
      <DataGrid
        rows={peopleStore}
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
export default PeopleTable;
