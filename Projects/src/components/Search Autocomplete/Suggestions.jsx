export const Suggestions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length ? (
        data.map((item, index) => (
          <li key={index} onClick={handleClick}>
            {item}
          </li>
        ))
      ) : (
        <div>No username match</div>
      )}
    </ul>
  );
};
