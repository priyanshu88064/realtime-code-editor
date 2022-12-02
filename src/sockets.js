import io from "socket.io-client";

const s1 = "http://localhost:80";
// const s2 = "http://192.168.43.125:80";

const skt = ()=>{
    return io(s1);
}

export default skt;