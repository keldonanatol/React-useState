function SubscriberView({subscriber, deleteSubscriber}) {
    return (
        <li>
            <p>Name: {subscriber.name}</p>
            <p>Email: {subscriber.email}</p>
            <button name="delete" onClick={deleteSubscriber}>
              Unsubscribe
            </button>  
        </li>//what will be displayed on the screen when submitted
    )
}

export default SubscriberView;