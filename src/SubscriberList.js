import SubscriberView from "./SubscriberView";

function SubcsriberList({subscribers, deleteSubscriber}) {
    return (
        <>
          <h2>Subscribers</h2>
          <ul>
              {subscribers.map((subscriber, index) => (
                  <SubscriberView
                   deleteSubscriber={() => deleteSubscriber(index)}
                   key={index}
                   subscriber={subscriber}
                   />//maps out the subscribers and renders it to SubscriberView also states what you intend on deleting
              ))}
          </ul>
        </>
    )
}

export default SubcsriberList