import Pubsub from "pubsub-js";
let token = null;
export function subscribe() {
  token = Pubsub.subscribe("data", (msg, data) => {
    console.log(data);
  });
}

export function unsubscribe() {
  Pubsub.unsubscribe(token);
}

export function publish() {
  Pubsub.publish("data", { name: "" });
}
