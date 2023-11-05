/* eslint-disable react/button-has-type */
type Props = {
  label: string;
  onClick?: () => void;
  icon?: string;
  color?: 'purple' | 'white';
  size?: 'md' | 'lg';
  type?: 'button' | 'submit';
};

function Button({
  label,
  onClick,
  icon,
  color = 'purple',
  size = 'md',
  type = 'button',
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md shadow-[1px_1px_0px_0px_#000] border-solid border border-black ${
        color === 'purple' && 'bg-chartPurple text-white'
      } 
      ${color === 'white' && 'bg-white text-black'}
      ${size === 'md' && ' w-[92px]'}
      ${size === 'lg' && ' w-[163px]'} 
      h-[38px] font-light flex gap-2 justify-center items-center`}
      type={type}
    >
      {icon && <img src={icon} alt="icon" />}
      {label}
    </button>
  );
}

export default Button;
