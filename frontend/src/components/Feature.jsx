export default function Feature({ title, description, icon, iconSrc }) {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt={`${icon} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
