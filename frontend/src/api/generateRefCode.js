import axios from "axios";

export const generateRefCode = async (_id, setRefCode) => {
  try {
    const res = await axios.post("/generate-ref-code", { _id });
    console.log("generateCode", res.data);
    //    localStorage.setItem("user", JSON.stringify(res.data));
    const userData = JSON.parse(localStorage.getItem("user"));
    userData.refCode = res.data.refCode;
    localStorage.setItem("user", JSON.stringify(userData));
    setRefCode(res.data.refCode);
    return res.data;
  } catch (error) {
    console.error("Error in generateRefCode", error);
    throw error;
  }
};
