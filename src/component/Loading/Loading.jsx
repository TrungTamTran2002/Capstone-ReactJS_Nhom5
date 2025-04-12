import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Loading() {
  let { isLoading } = useSelector((state) => state.loadingSlice);
  console.log(isLoading);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(255, 255, 255, 0.4)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(2px)",
        overflow: "hidden",
      }}
    >
      <RingLoader color="#000000" size={100} speedMultiplier={1.3} />
    </div>
  );
}
