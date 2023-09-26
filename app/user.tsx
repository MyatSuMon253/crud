import CreateUser from "@/components/CreateUser";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";

const UserPage = async () => {
  const users = await fetch('http://localhost:3000/api/users');
  console.log(users.json());
  
  return (
    <div>
      <CreateUser />
      <Table>
        <TableHeader>User List</TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>mike</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default UserPage