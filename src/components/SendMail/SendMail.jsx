import React from "react";
import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { db } from "../../firebase/firebase";
import firebase from "firebase";

function SendMail() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="To"
          name="to"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required</p>}
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )}
        <input
          type="text"
          placeholder="Message..."
          className="sendMail__message"
          name="message"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Message is required</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            varient="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
