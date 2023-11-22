import AxiosPublic from "../../../custom/AxiosPublic";
import AxiosSecure from "../../../custom/AxiosSecure";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const AuthorizedUsers = () => {
  const {
    isPending,
    error,
    refetch,
    data: admins = [],
  } = useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      let response = await AxiosPublic().get("/admins");
      return response.data;
    },
  });
  console.log(admins);

  if (isPending) {
    return <>...</>;
  }

  if (error) {
    return <>An error occurred.</>;
  }

  const HandleRole = id => {
    // AxiosSecure().patch(`/admins/${id}`)
    // refetch()
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>

        {admins.map((each, index) => (
          <tbody key={index + 1}>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>{each.firstName + " " + each.lastName}</td>
              <td><button onClick={() => HandleRole(each._id)}
              className="smooth-underline">{each.role.toUpperCase()}</button></td>
              <td>{each.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AuthorizedUsers;
