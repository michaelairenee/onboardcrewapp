interface BadgeProps {
  name: string;
}

const Badge = ({ name }: BadgeProps) => {
  return (
    <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs font-medium px-4 py-2 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
      {name}
    </span>
  );
};

export default Badge;
