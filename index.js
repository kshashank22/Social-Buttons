const Button = (props) => {
  //  Write your code here.
  const { text, styling } = props;
  return <button className={styling}>{text}</button>;
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <div className="subContainer">
      <h1 class="heading">Social Buttons</h1>
      <div className="buttonContainer">
        <Button text="Like" styling="likeStyle" />
        <Button text="Comment" styling="commentStyle" />
        <Button text="Share" styling="shareStyle" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
