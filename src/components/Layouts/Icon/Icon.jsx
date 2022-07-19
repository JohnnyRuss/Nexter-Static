function Icon({ className, iconSrc }) {
  return (
    <svg className={className}>
      <use href={`/assets/icons.svg#icon-${iconSrc}`}></use>
    </svg>
  );
}

export default Icon;
