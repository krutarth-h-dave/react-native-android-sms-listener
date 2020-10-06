/* @flow */
import type CancellableSubscription from "./CancellableSubscription";
import type ReceivedSmsMessage from "./ReceivedSmsMessage";
import { DeviceEventEmitter } from "react-native";

const SMS_RECEIVED_EVENT = "SMS_RECEIVED";

export default {
  addListener(
    listener: (message: ReceivedSmsMessage) => void
  ): CancellableSubscription {
    return DeviceEventEmitter.addListener(SMS_RECEIVED_EVENT, listener);
  },
};

export { CancellableSubscription, ReceivedSmsMessage };
