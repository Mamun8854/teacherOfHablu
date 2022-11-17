import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Teacher Of Hablu`;
  }, [title]);
};

export default useTitle;
