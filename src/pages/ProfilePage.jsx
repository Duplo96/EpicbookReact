import React, { useContext } from "react";
import { SearchContext } from "../components/provider/SearchContext";
import { EcommerceCard } from "../components/card/Card";

const ProfilePages = () => {
  const { bookDetail } = useContext(SearchContext);
  return (
    <div className="col" key={bookDetail.id}>
      <EcommerceCard img={bookDetail.img} />
    </div>
  );
};

export default ProfilePages;
