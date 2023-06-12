import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { myContext } from "../../../providers/Context";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SClassData from "./SClassData";

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
  //   if (loading) {
  //     return <p>loadddinngggggg..................</p>;
  //   }

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/selected/${user.email}`)
  //       .then(res => res.json())
  //       .then(data => console.log(data));
  //   }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-slate-800">
        All of my booked class
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {selectedClass?.map(Sclass => (
          <SClassData key={Sclass._id} selectedClass={Sclass}></SClassData>
        ))}
      </div>
    </div>
  );
};

export default Myselected;
