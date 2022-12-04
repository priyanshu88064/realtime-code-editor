import io from "socket.io-client";

const skt = ()=>{
    if(process.env.NODE_ENV==="development"){
        return io("http://192.168.204.125");
        // return io(process.env.REACT_APP_SER_LOC);
    }
    else{
        return io(process.env.REACT_APP_SER_PRO);
    }
}

export default skt;