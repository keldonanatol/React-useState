import React, { useState } from "react";
import "./App.css";
import Content from "./Content";
import Header from "./Header";
import CoinTossCounter from "./CoinTossCounter";
import SubscribeForm from "./SubscribeForm";
import SubcsriberList from "./SubscriberList";
import SubscriberForm2 from "./SubscriberForm2";


function App() {
  const [subscribers, setSubscribers] = useState([]);

  const createSubscriber = (newSubscriber) =>
    setSubscribers((currentSubscribers) => [
      newSubscriber,
      ...currentSubscribers,
    ]);

    const deleteSubscriber = (indexToDelete) => 
    setSubscribers((currentSubscribers) => 
       currentSubscribers.filter((post, index) => index !== indexToDelete)
    )
  return (
    <>
         <CoinTossCounter />
         <SubscribeForm createSubscriber={createSubscriber}/>
         <SubscriberForm2 createSubscriber={createSubscriber}/>
         <SubcsriberList
           subscribers={subscribers}
           deleteSubscriber={deleteSubscriber}
         />
    </>     
  )

//  const [loggedIn, setLoggedIn] = useState(false);
//  const toggleLoggedIn = () => setLoggedIn(!loggedIn)
//  return (
//  <>
//    <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn}/>
//    <Content loggedIn={loggedIn} text= "I love myself..."/>
//  </>
//  )


//  const [subscribed, setSubscribed] = useState(false); //variable and set variable
//  const [subscribedCount, setSubscribedCount] = useState(0);
//  const [alerts, setAlerts] = useState(false);
//  console.log("Subscribe Status:", subscribed); 
//  return (
//    <section>
//      <p>Please click to subscribe to my updates!</p>
//      <p>Subscriber Count: {subscribedCount}</p>
//      <button onClick={() => { 
//        setSubscribed(!subscribed); 
//        setSubscribedCount((currentCount) => currentCount +1); 
//        setSubscribedCount((currentCount) => currentCount +1);
//        if (!alerts) setAlerts(true)}}>
//        {subscribed ? "Unsubscribed" : "Subscribed"}
//      </button>
//      <button onClick={() => setAlerts(!alerts)}>
//        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
//      </button>
//    </section>
//  )


//  const handleSubscribe = () => {
//  console.log("Subscribing!") // prints in the console
//    alert("You subscribed!")// notification that you subscribed
//  };
//onClick={() => console.log("Subscribe")} or onClick={handleSubscribe}
//  return (
//    <section>
//      <p>Please click to subscribe to my updates!</p>
//      <button onClick={handleSubscribe}>Subscribe</button>// clicking handleSubscribe function
//    </section>
//  )
}

export default App;
