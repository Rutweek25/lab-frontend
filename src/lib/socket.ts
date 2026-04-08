import { io } from "socket.io-client";
import { SOCKET_URL } from "./runtimeConfig";

export const socket = io(SOCKET_URL, {
  autoConnect: false,
  auth: {
    token: localStorage.getItem("lab_token") || ""
  }
});

export const refreshSocketAuth = () => {
  socket.auth = {
    token: localStorage.getItem("lab_token") || ""
  };
};
