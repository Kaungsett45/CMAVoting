import React, { useState } from "react";
export default function VotingForm({ id, ShowVoting, ShowCom }) {
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //voting complete show stat

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   Handlevote(id);
  // };
  const handleVote = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    setErrorMessage("");
    try {
      const response = await fetch(`http://localhost:8080/voting/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ votetoken: token }),
      });

      if (!response.ok) {
        const data = await response.json();
        if (response.status === 404) {
          setErrorMessage(data.msg);
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        const data = await response.json();
        console.log("Vote registered successfully:", data);
        setToken("");
        ShowVoting();
        ShowCom();
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // let VotingCNoti =()=>{
  //   setComplete(!complete);
  // }
  return (
    <>
      <form onSubmit={handleVote}>
        <div className="-my-[280px] fixed bg-[#1A8B9C] rounded-lg  inset-x-[520px] h-[190px] ">
          <div className="flex justify-between m-2">
            <p className="text-red">Please add token (one-time use)</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white cursor-pointer"
              onClick={ShowVoting}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="flex flex-col m-4">
            <input
              type="text"
              placeholder="Add Vote Token"
              className="my-4 p-2 h-[36px] border-none"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            {errorMessage && (
              <div className="error-message text-red-500">{errorMessage}</div>
            )}
            <button
              type="submit"
              className="border-2 px-8 py-1 bg-[#1A8B9C] text-white rounded-lg"
            >
              Give Vote
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
