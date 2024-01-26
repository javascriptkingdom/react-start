//external css
import './button.css'


function MyButton() {

  // inline css
  const cssapply = {
    backgroundColor: '#04AA6D', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
  }

  const buttonVal = 'i am button'
  function handleClick() {
    alert('You clicked me!');
  }


  return (
    <button onClick={handleClick} style={cssapply}>{buttonVal}</button>
  );
}

export default MyButton;



