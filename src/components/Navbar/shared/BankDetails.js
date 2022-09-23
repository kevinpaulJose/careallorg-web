import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
export default function BankDetails() {
  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  Bank Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  ICICI BANK
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  Account Holder Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  Careall Digital Services
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  Branch Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  Tirunelveli
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  Bank Account No.
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  613505500547
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  IFSC Code
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color={"text.secondary"}>
                  ICIC0006135
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
