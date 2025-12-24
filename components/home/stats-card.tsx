import { IconType } from 'react-icons';

/**
 * Interface for the props of the StatsCard component.
 * @interface StatsCardProps
 * @property {string} title - The title of the card.
 * @property {string} value - The value to display.
 * @property {IconType} icon - The icon to display.
 */
interface StatsCardProps {
  title: string;
  value: string;
  icon: IconType;
}

/**
 * StatsCard is a card component that displays a statistic with a title, value, and icon.
 * @param {StatsCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered StatsCard component.
 */
const StatsCard = ({ title, value, icon: IconType }: StatsCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-4xl p-6 flex flex-col items-start gap-2 hover:border-primary/50 transition-colors">
      {/* Renders the icon for the card. 🎨 */}
      <IconType className="material-symbols-outlined text-4xl text-primary mb-2" />
      {/* Renders the value of the card. 🚀 */}
      <p className="text-4xl font-black tracking-tight">{value}</p>
      {/* Renders the title of the card. 📝 */}
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
        {title}
      </p>
    </div>
  );
};

export default StatsCard;
