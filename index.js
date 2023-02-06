const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="container">
        <Button buttonText="Like" className="Likebtn" />
        <Button buttonText="Comment" className="commentbtn" />
        <Button buttonText="Share" className="Sharebtn" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
