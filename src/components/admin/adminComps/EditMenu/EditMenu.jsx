import useMenu from "../../../custom/useMenu";

const EditMenu = () => {

    // const menu = useMenu()[0]
    // const refetch = useMenu()[1]

    const [menu, refetch] = useMenu()
    console.log(menu)


  return (
    <div className="flex justify-center items-center min-h-screen">
         <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>Category</th>
            <th></th>
            {/* <th>Email</th> */}
          </tr>
        </thead>

        {menu.map((each, index) => (
          <tbody key={index + 1}>
            {/* row 1 */}
            <tr>
              <th>{index + 1}</th>
              <td>{each.name}</td>
              <td>{each.type}</td>
              <td>{each.category}</td>
              <td><button>Edit</button></td>
            </tr>
          </tbody>
        ))}



        </table>
    </div>
  );
};

export default EditMenu;
