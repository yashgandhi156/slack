import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
import axios from "axios";
import Pusher from "pusher-js";

const pusher = new Pusher("bb720bd9f72a860b8f08", {
  cluster: "us3",
});

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  const getConvo = () => {
    axios.get(`/get/conversation?id=${roomId}`).then((res) => {
      setRoomDetails(res.data[0].channelName);
      setRoomMessages(res.data[0].conversation);
    });
  };

  useEffect(() => {
    if (roomId) {
      getConvo();

      const channel = pusher.subscribe("conversation");
      channel.bind("newMessage", function (data) {
        getConvo();
      });
      // real time staff..
    }
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong> #{roomDetails} </strong>
            {/* <strong>#general</strong> */}
            <StarBorderOutlined />
          </h4>
        </div>

        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails} channelId={roomId} />
    </div>
  );
};

export default Chat;
