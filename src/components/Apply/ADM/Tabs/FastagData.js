import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useEffect } from "react";
import { useState } from "react";
import { postData } from "../../../../api/calls";
import { baseURL } from "../../../../api/baseURL";
import {
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { localTheme } from "../../../theme";
import { updateData } from "./shared/updateCall";
// import { Link } from "react-router-dom";

// interface TablePaginationActionsProps {
//   count: number;
//   page: number;
//   rowsPerPage: number;
//   onPageChange: (
//     event: React.MouseEvent<HTMLButtonElement>,
//     newPage: number,
//   ) => void;
// }

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function FastagData(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [selected, setSelected] = useState([]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - apiData.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setLoading(true);
    const value = {
      item: "fastag",
      status: props.selected,
    };
    postData(value, `${baseURL}/fetch`)
      .then((response) => {
        let setData = [];
        const temp = response.data;
        temp.forEach((v, _) => {
          v.selected = false;
          setData.push(v);
        });
        setApiData(
          setData.sort((a, b) => b.last_modified.localeCompare(a.last_modified))
        );

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, [props.selected]);

  const fetchData = () => {
    setLoading(true);
    const value = {
      item: "fastag",
      status: props.selected,
    };
    postData(value, `${baseURL}/fetch`)
      .then((response) => {
        let setData = [];
        const temp = response.data;
        temp.forEach((v, _) => {
          v.selected = false;
          setData.push(v);
        });
        setApiData(
          setData.sort((a, b) => b.last_modified.localeCompare(a.last_modified))
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  const handleSelected = (id, status) => {
    // console.log(id);
    const newApiData = apiData.map((el) =>
      el._id === id ? { ...el, selected: status } : el
    );
    setApiData(newApiData);
    // const selectedOrder = { order_id: order_id, item: item };
    const selectedItems = newApiData.filter((v) => v.selected);
    console.log(selectedItems);
    setSelected(selectedItems);
  };

  const statuses = [
    {
      value: "Order Placed",
    },
    {
      value: "Processing",
    },
    {
      value: "Dispatched",
    },
    {
      value: "Delivered",
    },
  ];
  const [status, setStatus] = React.useState("Order Placed");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const updateValues = async () => {
    setSaving(true);
    await updateData(selected, "fastag", status);
    fetchData();
    setSelected([]);
    setSaving(false);
  };

  return (
    <>
      {selected.length > 0 && (
        <Stack direction="column">
          <TextField
            sx={{ marginTop: 4 }}
            id="outlined-select-currency"
            select
            value={status}
            onChange={handleChange}
            helperText="Change the Status"
          >
            {statuses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            sx={{ width: 200 }}
            onClick={updateValues}
            disabled={saving}
          >
            {saving ? <CircularProgress /> : "Save"}
          </Button>
        </Stack>
      )}

      {loading && (
        <>
          <Grid container justifyContent="center" mt={5}>
            <Grid item>
              <CircularProgress />
            </Grid>
          </Grid>
        </>
      )}
      {!loading && (
        <TableContainer component={Paper} sx={{ marginTop: 5 }}>
          <Table
            sx={{ minWidth: 500 }}
            size="small"
            aria-label="custom pagination table"
          >
            <TableBody>
              <TableRow>
                <TableCell>
                  <Typography>Select</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">ID</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Mobile No</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Email</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Class</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Vehicle No</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Chassis No</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Engine No</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">RTO Location</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Status</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">PAN</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Aad.</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">RC</Typography>
                </TableCell>
              </TableRow>
              {(rowsPerPage > 0
                ? apiData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : apiData
              ).map((row) => (
                <TableRow key={row._id}>
                  <TableCell>
                    <Checkbox
                      onClick={() => handleSelected(row._id, !row.selected)}
                      checked={row.selected}
                    />
                  </TableCell>
                  <TableCell>{`${row.order_id}`}</TableCell>
                  <TableCell>
                    {`${row.title}. ${row.firstName} ${row.lastName}`}
                  </TableCell>
                  <TableCell>{`${row.mobile_no}`}</TableCell>
                  <TableCell>{`${row.email_id}`}</TableCell>
                  <TableCell>{`${row.vehicle_class}`}</TableCell>
                  <TableCell>{`${row.vehicle_no}`}</TableCell>
                  <TableCell>{`${row.chassis_no}`}</TableCell>
                  <TableCell>{`${row.engine_no}`}</TableCell>
                  <TableCell>{`${row.rto_location}`}</TableCell>
                  <TableCell>{`${row.status}`}</TableCell>
                  <TableCell>
                    {/* <a
                      href={row.pan_file}
                     
                      download
                    > */}
                    <a
                      style={{ color: localTheme.darkSecondary }}
                      href={row.pan_file}
                      target="_blank"
                      download={true}
                      rel={"noreferrer"}
                    >
                      <DownloadRoundedIcon className="pointer" />
                    </a>

                    {/* </a> */}
                  </TableCell>
                  <TableCell>
                    <a
                      style={{ color: localTheme.darkSecondary }}
                      href={row.aadhar_file}
                      target="_blank"
                      download={true}
                      rel={"noreferrer"}
                    >
                      <DownloadRoundedIcon className="pointer" />
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      style={{ color: localTheme.darkSecondary }}
                      href={row.reg_cert_file}
                      target="_blank"
                      download={true}
                      rel={"noreferrer"}
                    >
                      <DownloadRoundedIcon className="pointer" />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={apiData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
