function CSDColumn({ title, items, color }) {
  return (
    <div className="csd-column">
      <h3>{title}</h3>

      <div className="csd-list">
        {items.map((item, index) => (
          <div key={index} className={`postit ${color}`}>
            <span className="pin"></span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CSDColumn;