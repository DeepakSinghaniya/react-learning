const Welcome = (props) => {
  return (
    <h1>
      Welcome {props.name}, Your email id is: {props.email}
    </h1>
  );
};

export default Welcome;
