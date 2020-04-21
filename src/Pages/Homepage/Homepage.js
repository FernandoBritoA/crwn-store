import React from "react";
import "./Homepage.scss";
import Directory from "../../Components/Directory/Directory";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
/*Route props:
match: {
url:only display up until it actually matches
}

history:
history.push, instead of <Link>, add it to a button
onClick()=> props.history.push('(Topics')

location: full pathname of where we are
*/
