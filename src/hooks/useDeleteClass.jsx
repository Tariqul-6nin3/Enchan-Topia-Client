// In ../../api/SaveUser.js

import { useEffect, useState } from "react";
import axios from "axios";

export const useDeleteClass = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteClass = async classId => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.delete(`/classes/${classId}`);
      return response.data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { deleteClass, isLoading, error };
};
