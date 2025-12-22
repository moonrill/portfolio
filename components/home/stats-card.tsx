import { IconType } from 'react-icons';

interface StatsCardProps {
  title: string;
  value: string;
  icon: IconType;
}

const StatsCard = ({ title, value, icon: IconType }: StatsCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-4xl p-6 flex flex-col items-start gap-2 hover:border-primary/50 transition-colors">
      <IconType className="material-symbols-outlined text-4xl text-primary mb-2" />
      <p className="text-4xl font-black tracking-tight">{value}</p>
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
        {title}
      </p>
    </div>
  );
};

export default StatsCard;
