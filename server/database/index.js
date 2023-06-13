import mongoose from "mongoose";
const connnect = () => {
  const uri =
    "mongodb+srv://jksa_1234:jksa_1234_jksa@cluster0.d5s4h0b.mongodb.net/";

  mongoose
    .connect(uri)
    .then((data) =>
      console.log(`Your App Is Running  on ${data.connection.host}`)
    )
    .catch((err) => console.log(err.message));
};

export default connnect;
