import CreateUser from "@/components/CreateUser";
import { DataTable } from "@/components/ui/data-table";
import { userColumns } from "./columns";

async function getUser() {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "GET",
  });
  const result = await response.json();
  return result.users;
}

const UserPage = async () => {
  const users = await getUser();

  return (
    <div className="container">
      <CreateUser />
      <DataTable columns={userColumns} data={users} />
    </div>
  );
};

export default UserPage;
