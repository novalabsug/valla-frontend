import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableComponent = () => {
  return (
    <>
      <Table>
        <TableCaption>A list of your recent transactions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Ref Id</TableHead>
            <TableHead>generated from</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Created</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              {Math.round(Math.random() * 1000000)}
            </TableCell>
            <TableCell>Self</TableCell>
            <TableCell>QR code</TableCell>
            <TableCell>success</TableCell>
            <TableCell className="text-center">02, 06 2023</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">
              {Math.round(Math.random() * 1000000)}
            </TableCell>
            <TableCell>Self</TableCell>
            <TableCell>Ref code</TableCell>
            <TableCell>success</TableCell>
            <TableCell className="text-center">22, 08 2023</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default TableComponent;
