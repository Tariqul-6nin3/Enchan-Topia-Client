import React, { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { GiInspiration } from "react-icons/gi";
import Swal from "sweetalert2";

const TableData = ({ users, index }) => {
  const { email, _id, displayName, image, role } = users;
  console.log(_id);
  const [isRoleUpdated, setIsRoleUpdated] = useState(false);

  const handleRoleUpdate = (userId, newRole) => {
    fetch(
      `https://enchantopia-server-tariqul-6nin3.vercel.app/users/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role: newRole }),
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsRoleUpdated(true);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Class added successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      {/* row 1 */}
      <tr className="hover">
        <td>
          <p>{index + 1}</p>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{displayName}</div>
              <div className="text-sm opacity-50">Dhaka, Bangladesh</div>
            </div>
          </div>
        </td>
        <td>
          <h3>{email}</h3>
        </td>

        <td>
          <button
            className="btn btn-ghost btn-xs"
            disabled={isRoleUpdated || role === "admin"}
            onClick={() => handleRoleUpdate(_id, "admin")}>
            <GrUserAdmin />
            Make Admin
          </button>
          <button
            className="btn btn-ghost btn-xs"
            disabled={isRoleUpdated || role === "instructor"}
            onClick={() => handleRoleUpdate(_id, "instructor")}>
            <GiInspiration />
            Make Instructor
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableData;
