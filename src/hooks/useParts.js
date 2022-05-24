import { useQuery } from "react-query";

const useParts = () => {
  const {isLoading, data: part, refetch } = useQuery(["products"], () =>
    fetch(`http://localhost:5000/parts`).then((res) => res.json())
  );
  return [isLoading, part, refetch];
};

export default useParts;
