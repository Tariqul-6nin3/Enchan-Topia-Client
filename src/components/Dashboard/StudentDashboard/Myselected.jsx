import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../../providers/Context";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SClassData from "./SClassData";
import Container from "../../container/Container";

const Myselected = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  //   console.log("from upper", selectedClass);
  const { user, loading } = useContext(myContext);
  const [AxiosSecure] = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["selected", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await AxiosSecure.get(`/selected/${user?.email}`);
      //   console.log("res from axios", res.data);
      setSelectedClass(res.data);
      return res.data;
    },
  });
  //   useEffect(() => {
  //     fetch(`http://localhost:5000/selected/${user.email}`)
  //       .then(res => res.json())
  //       .then(data => console.log(data));
  //   }, []);
  return (
    <Container>
      <div className="overflow-x-auto px-6">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Email</th>
              <th>Price</th>
              <th>AvailableSeats</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody className="space-y-3 mt-6">
            {selectedClass?.map(Sclass => (
              <SClassData
                key={Sclass._id}
                selectedClass={Sclass}
                refetch={refetch}></SClassData>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Myselected;
