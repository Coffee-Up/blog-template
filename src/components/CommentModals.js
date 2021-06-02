import React, { useState } from "react";
import "../styles/CommentModals.css";

import { IconLoader } from "../assets/icons";
import { CloseModalButton } from "./";

const CommentModalSending = ({ opened }) => {
  return (
    <>
      {opened && (
        <>
          <div id="modal-comment-sending-container">
            <IconLoader id="loader-icon" classNamae="g-rotate" />
          </div>
        </>
      )}
    </>
  );
};

const CommentModalSended = ({ opened, handleClose }) => {
  return (
    <>
      {opened && (
        <>
          <div id="modal-comment-sended-bg"></div>
          <div id="modal-comment-sended-container">
            <p>You have succeffully sended your post !</p>
            <p>Your posts will be visible in few minutes.</p>
            <CloseModalButton onClickHerited={handleClose}>OK</CloseModalButton>
          </div>
        </>
      )}
    </>
  );
};

export { CommentModalSending, CommentModalSended };
