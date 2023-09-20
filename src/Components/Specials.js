import Card from "./Card";

const Specials = ({ data }) => {
  return (
    <section id="special" className="container mb-3">
      <p><br></br></p>
      <h2>This Week Specials!</h2>
      <div className="special-body">
        {data.map((element, index) => {
          return <Card key={index} data={element} />;
        })}
      </div>
      <p><br></br></p>
    </section>
  );
};

export default Specials;
