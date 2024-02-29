import React, { createContext, useEffect, useState } from "react";

const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [reload, setReload] = useState(false);
  const [cardId, setCardId] = useState(null);
  const [comments, setComments] = useState([]);
  // Fetching data using useEffect hook when component mounts
  useEffect(() => {
    if (cardId) {
      const getComment = async (cardId) => {
        try {
          const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/books/${cardId}/comments/`,
            {
              method: "GET",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIxNzFlNjkxM2Y2NTAwMThkMDkyN2IiLCJpYXQiOjE3MDgwODk2NjYsImV4cCI6MTcwOTI5OTI2Nn0.Oz2IYoLeW07qPhAbavLj94O7yxFjp0sKvTc5ep3U_1U",
              },
            }
          );
          const data = await response.json();
          setComments(data);
        } catch (error) {
          console.log(error);
        }
      };

      getComment(cardId);
    }
  }, [cardId, reload]);

  // Providing context values to the children components
  return (
    <CommentContext.Provider
      value={{
        setCardId,
        cardId,
        reload,
        setReload,
        comments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export { CommentProvider, CommentContext };
